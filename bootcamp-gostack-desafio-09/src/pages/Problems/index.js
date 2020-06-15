import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import ProblemsItems from '~/components/ProblemsItems';
import api from '~/services/api';

import { Container, PageContainer } from './styles';
import EmptyPage from '~/components/EmptyPage';

export default function Problems() {
    const [page, setPage] = useState(1);
    const [problems, setProblems] = useState([]);

    useEffect(() => {
        async function loadDeliveries() {
            const response = await api.get('/deliverys/deliveries/problems', {
                params: { page },
            });
            setProblems(response.data);
        }
        loadDeliveries();
    }, [problems, page]);

    function nextPage() {
        setPage(page + 1);
    }

    function prevPage() {
        setPage(page - 1);
    }

    return (
        <>
            <Container>
                <strong>Problemas na entrega</strong>
                {problems.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Encomenda</th>
                                <th>Problema</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        {problems.map(problem => (
                            <ProblemsItems
                                problem={problem}
                                key={String(problem.id)}
                            />
                        ))}
                    </table>
                ) : (
                    <EmptyPage />
                )}
            </Container>
            <PageContainer page={page} length={problems.length}>
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
                {problems.length > 0 ? (
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
