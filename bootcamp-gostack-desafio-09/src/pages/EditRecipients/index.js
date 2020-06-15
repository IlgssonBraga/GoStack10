import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, Content } from './styles';
import api from '~/services/api';

export default function EditRecipients({ match }) {
    const [recipient, setRecipient] = useState(null);

    const { id } = match.params;

    useEffect(() => {
        async function loadRecipients() {
            const response = await api.get(`/recipients/${id}`);
            setRecipient(response.data);
        }
        loadRecipients();
    }, [id]);

    async function EditRecipient(data) {
        try {
            await api.put(`/recipients/${id}`, data);
            toast.success('O destinátário foi editado com sucesso!');
        } catch (err) {
            toast.error('Falha ao editar destinatário. Tente novamente!');
        }
    }
    return (
        <Container>
            <Form onSubmit={EditRecipient} initialData={recipient}>
                <div id="container">
                    <strong>Edição de destinatários</strong>
                    <div>
                        <NavLink to="/recipients">
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
                    <label htmlFor="nome">
                        Nome <Input id="nome" name="nome" type="text" />
                    </label>
                    <div>
                        <label htmlFor="rua">
                            Rua <Input id="rua" name="rua" type="text" />
                        </label>
                        <label htmlFor="numero">
                            Número{' '}
                            <Input id="numero" name="numero" type="text" />
                        </label>
                        <label htmlFor="complemento">
                            Complemento{' '}
                            <Input
                                id="complemento"
                                name="complemento"
                                type="text"
                            />
                        </label>
                    </div>

                    <div>
                        <label htmlFor="cidade">
                            Cidade{' '}
                            <Input id="cidade" name="cidade" type="text" />
                        </label>
                        <label htmlFor="estado">
                            Estado{' '}
                            <Input id="estado" name="estado" type="text" />
                        </label>
                        <label htmlFor="cep">
                            CEP <Input id="cep" name="cep" type="text" />
                        </label>
                    </div>
                </Content>
            </Form>
        </Container>
    );
}

EditRecipients.propTypes = {
    match: PropTypes.object.isRequired,
};
