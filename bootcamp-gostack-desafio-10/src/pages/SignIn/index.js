import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Logo, TextInput, ButtonSubmit, TextButton } from './styles';
import { signInRequest } from '~/store/modules/auth/actions';
import logo from '~/assets/fastfeet-logo2.png';

export default function SignIn() {
    const dispatch = useDispatch();
    const [id, setId] = useState();
    const loading = useSelector((state) => state.auth.loading);
    async function handleSubmit() {
        dispatch(signInRequest(id));
    }
    return (
        <Container>
            <Logo source={logo} />
            <TextInput
                placeholder="Informe seu ID de cadastro"
                value={id}
                onChangeText={setId}
            />
            <ButtonSubmit loading={loading} onPress={handleSubmit}>
                <TextButton>Entrar no sistema</TextButton>
            </ButtonSubmit>
        </Container>
    );
}
