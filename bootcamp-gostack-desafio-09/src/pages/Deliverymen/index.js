import React, { useState, useEffect } from 'react';
import {
    MdAdd,
    MdSearch,
    MdKeyboardArrowLeft,
    MdKeyboardArrowRight,
} from 'react-icons/md';
import { lighten } from 'polished';
import { Link } from 'react-router-dom';
import DeliverymanItems from '~/components/DeliverymanItems';
import { Container, PageContainer } from './styles';
import api from '~/services/api';
import EmptyPage from '~/components/EmptyPage';

export default function Deliverymen() {
    const [page, setPage] = useState(1);
    const [deliverymen, setDeliverymen] = useState([]);
    const [q, setQ] = useState('');

    useEffect(() => {
        async function loadDeliveries() {
            const response = await api.get('/deliverymans', {
                params: { q, page },
            });
            setDeliverymen(response.data);
        }
        loadDeliveries();
    }, [deliverymen, q, page]);

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
                <strong>Gerenciando entregadores</strong>
                <div>
                    <span>
                        <input
                            type="text"
                            placeholder="Buscar por entregadores"
                            onChange={loadSearch}
                        />
                        <MdSearch size={20} color={lighten(0.01, 'gray')} />
                    </span>
                    <Link to="/deliverymen/registerdeliveryman">
                        <button type="button">
                            <MdAdd size={20} color="#fff" />
                            Cadastrar
                        </button>
                    </Link>
                </div>
                {deliverymen.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Foto</th>
                                <th>Nome</th>
                                <th>E-mail</th>
                                <th>Ações</th>
                            </tr>
                        </thead>

                        {deliverymen.map(deliveryman => (
                            <DeliverymanItems
                                key={String(deliveryman.id)}
                                deliveryman={deliveryman}
                            />
                        ))}
                    </table>
                ) : (
                    <EmptyPage />
                )}
            </Container>
            <PageContainer page={page} length={deliverymen.length}>
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
                {deliverymen.length > 0 ? (
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
