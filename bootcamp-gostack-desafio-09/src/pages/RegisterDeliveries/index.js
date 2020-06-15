import React from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { Container, Content } from './styles';
import { RegisterDeliveriesRequest } from '~/store/modules/deliveries/actions';

const schema = Yup.object().shape({
    recipient_id: Yup.number().required('O id do destinatário é obrigatório'),
    deliveryman_id: Yup.number().required('O id do entregador é obrigatório!'),
    product: Yup.string().required('O nome do produto é obrigatório!'),
});

export default function RegisterDeliveries() {
    const dispatch = useDispatch();

    function handleSubmit({ recipient_id, deliveryman_id, product }) {
        dispatch(
            RegisterDeliveriesRequest(recipient_id, deliveryman_id, product)
        );
    }
    return (
        <Container>
            <Form schema={schema} onSubmit={handleSubmit}>
                <div id="conteudo">
                    <span>Cadastro de encomendas</span>
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
                                type="text"
                                placeholder="Id do destinatário"
                            />
                        </label>

                        <label htmlFor="deliveryman_id">
                            Entregador
                            <Input
                                id="deliveryman_id"
                                name="deliveryman_id"
                                type="text"
                                placeholder="Id do entregador"
                            />
                        </label>
                    </div>

                    <span>
                        <label htmlFor="product">
                            Produto
                            <Input
                                id="product"
                                name="product"
                                type="text"
                                placeholder="Nome do produto"
                            />
                        </label>
                    </span>
                </Content>
            </Form>
        </Container>
    );
}
