import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';
import { updateProfileRequest } from '~/store/modules/user/actions';
import { signOut } from '~/store/modules/auth/actions';

import {
    Container,
    Form,
    Title,
    Separator,
    FormInput,
    SubmitButton,
    LogOutButton,
} from './styles';

export default function Profile() {
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.user.profile);
    const emailRef = useRef();
    const oldPasswordRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    const [name, setName] = useState(profile.name);
    const [email, setEmail] = useState(profile.email);
    const [oldPassword, setOldPassword] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setpasswordConfirm] = useState('');

    useEffect(() => {
        setOldPassword('');
        setPassword('');
        setpasswordConfirm('');
    }, [profile]);

    function handleSubmit() {
        dispatch(
            updateProfileRequest({
                name,
                email,
                oldPassword,
                password,
                passwordConfirm,
            })
        );
    }

    function handleLogout() {
        dispatch(signOut());
    }
    return (
        <Background>
            <Container>
                <Title>Meu perfil</Title>
                <Form>
                    <FormInput
                        icon="person-outline"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Nome completo"
                        returnKeyType="next"
                        onSubmitEditing={() => emailRef.current.focus()}
                        value={name}
                        onChangeText={setName}
                    />

                    <FormInput
                        icon="mail-outline"
                        keyboardType="email-address"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Digite seu e-mail"
                        ref={emailRef}
                        returnKeyType="next"
                        onSubmitEditing={() => oldPassword.current.focus()}
                        value={email}
                        onChangeText={setEmail}
                    />

                    <Separator />

                    <FormInput
                        icon="lock-outline"
                        secureTextEntry
                        placeholder="Sua senha atual"
                        ref={oldPasswordRef}
                        returnKeyType="next"
                        onSubmitEditing={() => passwordRef.current.focus()}
                        value={oldPassword}
                        onChangeText={setOldPassword}
                    />

                    <FormInput
                        icon="lock-outline"
                        secureTextEntry
                        placeholder="Sua nova senha"
                        ref={passwordRef}
                        returnKeyType="next"
                        onSubmitEditing={() =>
                            passwordConfirmRef.current.focus()
                        }
                        value={password}
                        onChangeText={setPassword}
                    />

                    <FormInput
                        icon="lock-outline"
                        secureTextEntry
                        placeholder="Confirmação de senha"
                        ref={passwordConfirmRef}
                        returnKeyType="send"
                        onSubmitEditing={handleSubmit}
                        value={passwordConfirm}
                        onChangeText={setpasswordConfirm}
                    />

                    <SubmitButton onPress={handleSubmit}>
                        Atualizar perfil
                    </SubmitButton>

                    <LogOutButton onPress={handleLogout}>
                        Sair do GoBarber
                    </LogOutButton>
                </Form>
            </Container>
        </Background>
    );
}

Profile.navigationOptions = {
    tabBarLabel: 'Meu perfil',
    tabBarIcon: ({ tintColor }) => (
        <Icon name="person" size={20} color={tintColor} />
    ),
};
