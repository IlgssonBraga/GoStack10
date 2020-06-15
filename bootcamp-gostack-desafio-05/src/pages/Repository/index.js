import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import api from '../../services/api';
import { Loading, Owner, IssueList } from './styles';
import Container from '../../components/Container';

class Repository extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.shape({
                repository: PropTypes.string,
            }),
        }).isRequired,
    };

    state = {
        repository: {},
        issues: [],
        loading: true,
        status: 'open',
        page: 1,
    };

    async componentDidMount() {
        const { match } = this.props;
        const repoName = decodeURIComponent(match.params.repository);

        const { status } = this.state;

        const [repository, issues] = await Promise.all([
            api.get(`repos/${repoName}`),
            api.get(`repos/${repoName}/issues`, {
                params: {
                    state: status,
                    per_page: 5,
                },
            }),
        ]);

        this.setState({
            repository: repository.data,
            issues: issues.data,
            loading: false,
        });
    }

    async componentDidUpdate(prevProp, prevState) {
        const { status, page } = this.state;
        if (prevState.status !== status || prevState.page !== page) {
            const { match } = this.props;
            const repoName = decodeURIComponent(match.params.repository);

            const [repository, issues] = await Promise.all([
                api.get(`repos/${repoName}`),
                api.get(`repos/${repoName}/issues`, {
                    params: {
                        state: status,
                        per_page: 5,
                        page,
                    },
                }),
            ]);

            this.setState({
                repository: repository.data,
                issues: issues.data,
                loading: false,
            });
        }
    }

    handleStatusChange = e => {
        this.setState({ status: e.target.value });
    };

    handleChangePage = method => {
        const { page } = this.state;
        if (method === 'next') {
            this.setState({ page: page + 1 });
        } else {
            this.setState({ page: page - 1 });
        }
        /*
        if (method === 'before') {
            this.setState({ page: page - 1 });
            if (page <= 1) {
                this.setState({ page: 1 });
            }
        } */
    };

    render() {
        const { repository, issues, loading, page } = this.state;
        if (loading) {
            return <Loading>Carregando</Loading>;
        }

        return (
            <Container>
                <Owner>
                    <Link to="/">Voltar aos repositórios</Link>
                    <img
                        src={repository.owner.avatar_url}
                        alt={repository.owner.login}
                    />

                    <h1>{repository.name}</h1>
                    <p>{repository.description}</p>
                </Owner>
                <IssueList page={page}>
                    <select
                        id="issueselectstate"
                        onChange={this.handleStatusChange}
                        name="issueselectstate"
                    >
                        <option value="open">Open</option>
                        <option value="closed">Closed</option>
                        <option value="all">All</option>
                    </select>
                    {issues.map(issue => (
                        <li key={String(issue.id)}>
                            <img
                                src={issue.user.avatar_url}
                                alt={issue.user.login}
                            />
                            <div>
                                <strong>
                                    <a href={issue.html_url}>{issue.title}</a>
                                    {issue.labels.map(label => (
                                        <span key={String(label.id)}>
                                            {label.name}
                                        </span>
                                    ))}
                                </strong>
                                <p>{issue.user.login}</p>
                            </div>
                        </li>
                    ))}
                    <div id="btn-pagination">
                        <button
                            id="beforebtn"
                            type="button"
                            onClick={() => this.handleChangePage('before')}
                        >
                            Anterior
                        </button>
                        Página {page}
                        <button
                            id="nextbtn"
                            type="button"
                            onClick={() => this.handleChangePage('next')}
                        >
                            Próximo
                        </button>
                    </div>
                </IssueList>
            </Container>
        );
    }
}

export default Repository;
