import React, { useEffect, useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import {
    MdAdd,
    MdSearch,
    MdKeyboardArrowLeft,
    MdKeyboardArrowRight,
} from 'react-icons/md';
import { lighten } from 'polished';
import { NavLink } from 'react-router-dom';
import { Container, PageContainer } from './styles';
import DeliveryItems from '~/components/DeliveryItems';
import api from '~/services/api';
import EmptyPage from '~/components/EmptyPage';

export default function Deliveries() {
    const [page, setPage] = useState(1);
    const [deliveries, setDeliveries] = useState([]);
    const [q, setQ] = useState('');

    useEffect(() => {
        async function loadDeliveries() {
            const response = await api.get('/deliverys', {
                params: { q, page },
            });

            setDeliveries(response.data);
        }
        loadDeliveries();
    }, [deliveries, q, page]);

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
                <strong>Gerenciando encomendas</strong>
                <div>
                    <span>
                        <Form onSubmit={() => {}}>
                            <Input
                                name="search"
                                id="search"
                                type="text"
                                placeholder="Buscar por encomenda"
                                onChange={loadSearch}
                                value={q}
                            />
                        </Form>
                        <MdSearch size={20} color={lighten(0.01, 'gray')} />
                    </span>

                    <NavLink to="/deliveries/registerdeliveries">
                        <button type="button">
                            <MdAdd size={20} color="#fff" />
                            Cadastrar
                        </button>
                    </NavLink>
                </div>
                {deliveries.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Destinatário</th>
                                <th>Cidade/Estado</th>
                                <th>Produto</th>
                                <th>Entregador</th>
                                <th>Status</th>
                                <th>Ações</th>
                            </tr>
                        </thead>

                        {deliveries.map(delivery => (
                            <DeliveryItems
                                key={String(delivery.id)}
                                delivery={delivery}
                            />
                        ))}
                    </table>
                ) : (
                    <EmptyPage />
                )}

                <PageContainer page={page} length={deliveries.length}>
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
                    {deliveries.length > 0 ? (
                        <button id="right" type="button" onClick={nextPage}>
                            <MdKeyboardArrowRight size={30} />
                        </button>
                    ) : (
                        <button id="right" type="button">
                            <MdKeyboardArrowRight size={30} />
                        </button>
                    )}
                </PageContainer>
            </Container>
        </>
    );
}
