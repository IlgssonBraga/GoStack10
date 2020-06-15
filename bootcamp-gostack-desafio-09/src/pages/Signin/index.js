import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import logo from '~/assets/fastfeet-logo.png';

import { signInRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
    email: Yup.string()
        .email('Insira um e-mail válido!')
        .required('O e-mail é obrigatório!'),
    password: Yup.string().required('A senha é obrigatória!'),
});

export default function Signin() {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.auth.loading);

    function handleSubmit({ email, password }) {
        dispatch(signInRequest(email, password));
    }
    return (
        <>
            <img src={logo} alt="Fastfeet" />
            <Form schema={schema} onSubmit={handleSubmit}>
                <span>SEU E-MAIL</span>
                <Input name="email" type="text" />
                <span>SUA SENHA</span>
                <Input name="password" type="password" />
                <button type="submit">
                    {loading ? 'Carregando...' : 'Acessar'}
                </button>
            </Form>
        </>
    );
}
