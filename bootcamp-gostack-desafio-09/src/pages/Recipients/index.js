import React, { useState, useEffect } from 'react';
import { lighten } from 'polished';
import {
    MdAdd,
    MdSearch,
    MdKeyboardArrowLeft,
    MdKeyboardArrowRight,
} from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import RecipientsItems from '~/components/RecipientsItems';
import { Container, PageContainer } from './styles';
import api from '~/services/api';
import EmptyPage from '~/components/EmptyPage';

export default function Recipients() {
    const [page, setPage] = useState(1);
    const [recipients, setRecipients] = useState([]);
    const [q, setQ] = useState('');

    useEffect(() => {
        async function loadDeliveries() {
            const response = await api.get('/recipients', {
                params: { q, page },
            });
            setRecipients(response.data);
        }
        loadDeliveries();
    }, [recipients, q, page]);

    function loadSearch(e) {
        setQ(e.target.value);
    }

    function nextPage() {
        setPage(page + 1);
    }

    function prevPage() {
        setPage(page - 1);
    }

    return (
        <>
            <Container>
                <strong>Gerenciando destinatários</strong>
                <div>
                    <span>
                        <input
                            type="text"
                            placeholder="Buscar por destinatários"
                            onChange={loadSearch}
                        />
                        <MdSearch size={20} color={lighten(0.01, 'gray')} />
                    </span>
                    <NavLink to="/recipients/registerrecipients">
                        <button type="button">
                            <MdAdd size={20} color="#fff" />
                            Cadastrar
                        </button>
                    </NavLink>
                </div>
                {recipients.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Endereço</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        {recipients.map(recipient => (
                            <RecipientsItems
                                key={String(recipient.id)}
                                recipient={recipient}
                            />
                        ))}
                    </table>
                ) : (
                    <EmptyPage />
                )}
            </Container>
            <PageContainer page={page} length={recipients.length}>
                {' '}
                {page > 1 ? (
                    <button id="left" type="button" onClick={prevPage}>
                        <MdKeyboardArrowLeft size={30} />
                    </button>
                ) : (
                    <button id="left" type="button">
                        <MdKeyboardArrowLeft size={30} />
                    </button>
                )}{' '}
                <span>{page}</span>
                {recipients.length > 0 ? (
                    <button id="right" type="button" onClick={nextPage}>
                        <MdKeyboardArrowRight size={30} />
                    </button>
                ) : (
                    <button id="right" type="button">
                        <MdKeyboardArrowRight size={30} />
                    </button>
                )}
            </PageContainer>
        </>
    );
}
