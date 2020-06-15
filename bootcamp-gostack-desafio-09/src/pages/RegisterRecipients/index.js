import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch } from 'react-redux';
import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { Container, Content } from './styles';
import { RegisterRecipientsRequest } from '~/store/modules/recipients/actions';

export default function RegisterRecipients() {
    const dispatch = useDispatch();

    function handleSubmit({
        nome,
        rua,
        numero,
        complemento,
        estado,
        cidade,
        cep,
    }) {
        dispatch(
            RegisterRecipientsRequest(
                nome,
                rua,
                numero,
                complemento,
                estado,
                cidade,
                cep
            )
        );
    }
    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <div id="container">
                    <strong>Cadastro de destinatários</strong>
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
