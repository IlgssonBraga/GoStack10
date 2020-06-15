import React, { useState, useEffect } from 'react';
import { Input, Form } from '@rocketseat/unform';
import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { Container, Content } from './styles';
import api from '~/services/api';

export default function EditDeliveries({ match }) {
    const [delivery, setDelivery] = useState(null);

    const { id } = match.params;

    useEffect(() => {
        async function loadDeliveries() {
            const response = await api.get(`/deliverys/${id}`);
            setDelivery(response.data);
        }
        loadDeliveries();
    }, [id]);

    async function editDelivery(data) {
        try {
            await api.put(`/deliverys/${id}`, data);
            toast.success('A entrega foi editada com sucesso');
        } catch (err) {
            toast.error('Falha ao editar delivery. Tente novamente!');
        }
    }

    return (
        <Container>
            <Form onSubmit={editDelivery} initialData={delivery}>
                <div id="conteudo">
                    <span>Edição de encomendas</span>
                    <div>
                        <NavLink to="/deliveries">
                            <button id="voltar" type="button">
                                <MdKeyboardArrowLeft size={20} /> VOLTAR
                            </button>
                        </NavLink>
                        <button id="salvar" type="submit">
                            <MdCheck size={20} />
                            SALVAR
                        </button>
                    </div>
                </div>

                <Content>
                    <div>
                        <label htmlFor="recipient_id">
                            Destinatário
                            <Input
                                id="recipient_id"
                                name="recipient_id"
                                type="number"
                            />
                        </label>

                        <label htmlFor="deliveryman_id">
                            Entregador
                            <Input
                                id="deliveryman_id"
                                name="deliveryman_id"
                                type="number"
                            />
                        </label>
                    </div>

                    <span>
                        <label htmlFor="product">
                            Produto
                            <Input id="product" name="product" type="text" />
                        </label>
                    </span>
                </Content>
            </Form>
        </Container>
    );
}

EditDeliveries.propTypes = {
    match: PropTypes.object.isRequired,
};
