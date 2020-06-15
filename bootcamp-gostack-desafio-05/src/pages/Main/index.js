import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import api from '../../services/api';
import { Form, SubmitButton, List } from './styles';
import Container from '../../components/Container';

class Main extends Component {
    state = {
        newRepo: '',
        repositories: [],
        loading: 0,
        error: 0,
        placeholder: 'Add repository',
    };

    componentDidMount() {
        const repositories = localStorage.getItem('repositories');
        if (repositories) {
            this.setState({ repositories: JSON.parse(repositories) });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const { repositories } = this.state;

        if (prevState.repositories !== repositories) {
            localStorage.setItem('repositories', JSON.stringify(repositories));
        }
    }

    handleInputChange = e => {
        this.setState({ newRepo: e.target.value });
    };

    handleSubmit = async e => {
        e.preventDefault();

        try {
            this.setState({ loading: 1 });

            const { newRepo, repositories } = this.state;

            const response = await api.get(`repos/${newRepo}`);

            const data = {
                name: response.data.full_name,
            };

            const verificaRepo = repositories.find(
                repo => repo.name === newRepo
            );

            if (newRepo === '') {
                throw new Error('Repositório vazio.');
            }

            if (verificaRepo) {
                throw new Error('Repositório duplicado.');
            }

            this.setState({
                repositories: [...repositories, data],
                newRepo: '',
                loading: 0,
                error: 0,
                placeholder: 'Add repository',
            });
        } catch (err) {
            if (err.response && err.response.status === 404) {
                this.setState({
                    error: 1,
                    loading: 0,
                    newRepo: '',
                    placeholder: 'Repository not found',
                });
                if (err.message === 'Repositório vazio.') {
                    this.setState({ placeholder: 'Fill a valid value' });
                }
                console.log(err.message);
            }

            if (err.message === 'Repositório duplicado.') {
                this.setState({
                    error: 1,
                    loading: 0,
                    newRepo: '',
                    placeholder: 'Repository duplicate',
                });
            }

            if (err.message === 'Repositório vazio.') {
                this.setState({
                    error: 1,
                    loading: 0,
                    newRepo: '',
                    placeholder: 'Fill a valid value',
                });
            }
        }
    };

    render() {
        const {
            newRepo,
            loading,
            repositories,
            error,
            placeholder,
        } = this.state;

        return (
            <>
                <Container>
                    <h1>
                        {' '}
                        <FaGithubAlt /> Repositories
                    </h1>

                    <Form onSubmit={this.handleSubmit} error={error}>
                        <input
                            type="text"
                            placeholder={placeholder}
                            value={newRepo}
                            onChange={this.handleInputChange}
                        />

                        <SubmitButton loading={loading}>
                            {loading ? (
                                <FaSpinner
                                    color="#FFF"
                                    className="plus"
                                    size={14}
                                />
                            ) : (
                                <div id="containerbtn">
                                    <FaPlus
                                        color="#FFF"
                                        className="plus"
                                        size={14}
                                    />
                                </div>
                            )}
                        </SubmitButton>
                    </Form>

                    <List>
                        {repositories.map(repository => (
                            <li key={repository.name}>
                                <span>{repository.name}</span>
                                <Link
                                    to={`/repository/${encodeURIComponent(
                                        repository.name
                                    )}`}
                                >
                                    Detalhes
                                </Link>
                            </li>
                        ))}
                    </List>
                </Container>
            </>
        );
    }
}

export default Main;
