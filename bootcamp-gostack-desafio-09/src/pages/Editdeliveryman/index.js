import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import { Container, Content } from './styles';
import api from '~/services/api';
import AvatarInput from './AvatarInput';

export default function EditDeliveryman({ match }) {
    const [deliveryman, setDeliveryman] = useState(null);

    const { id } = match.params;

    useEffect(() => {
        async function loadDeliveryman() {
            const response = await api.get(`/deliverymans/${id}`);
            setDeliveryman(response.data.deliveryman);
        }
        loadDeliveryman();
    }, [id]);

    async function handleSubmit(data) {
        try {
            await api.put(`/deliverymans/${id}`, data);
            toast.success('O entregador foi editado com sucesso');
        } catch (err) {
            toast.error('Falha ao editar entregador. Tente novamente!');
        }
    }

    return (
        <Container>
            <Form initialData={deliveryman} onSubmit={handleSubmit}>
                <div id="container">
                    <strong>Edição de entregadores</strong>
                    <div>
                        <NavLink to="/deliverymen">
                            <button id="voltar" type="button">
                                <MdKeyboardArrowLeft size={20} />{' '}
                                <span>VOLTAR</span>
                            </button>
                        </NavLink>
                        <button id="salvar" type="submit">
                            <MdCheck size={20} /> <span> SALVAR</span>
                        </button>
                    </div>
                </div>

                <Content>
                    <div>
                        <div id="files">
                            <AvatarInput name="avatar_id" />
                        </div>
                        <label htmlFor="name">
                            Nome <Input id="name" name="name" type="text" />
                        </label>

                        <label htmlFor="email">
                            E-mail{' '}
                            <Input id="email" name="email" type="email" />
                        </label>
                    </div>
                </Content>
            </Form>
        </Container>
    );
}

EditDeliveryman.propTypes = {
    match: PropTypes.object.isRequired,
};
