import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { Container, Content } from './styles';
import { RegisterDeliverymanRequest } from '~/store/modules/deliveryman/actions';
import AvatarInput from './AvatarInput';

export default function RegisterDeliveryman() {
    const dispatch = useDispatch();

    function handleSubmit({ name, avatar_id, email }) {
        dispatch(RegisterDeliverymanRequest(name, avatar_id, email));
    }
    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <div id="container">
                    <strong>Cadastro de entregadores</strong>
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
                            Nome{' '}
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Nome do entregador"
                            />
                        </label>

                        <label htmlFor="email">
                            E-mail{' '}
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="E-mail do entregador"
                            />
                        </label>
                    </div>
                </Content>
            </Form>
        </Container>
    );
}
