import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { parseISO, format } from 'date-fns';
import { signOut } from '~/store/modules/auth/actions';

import {
    Container,
    Avatar,
    TextTitle,
    TextInfo,
    ButtonLogout,
    LogoutText,
} from './styles';

export default function Profile() {
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.user.profile);
    const dateFormated = format(parseISO(profile.createdAt), 'dd/MM/yyyy');

    function handleLogout() {
        dispatch(signOut());
    }

    return (
        <Container>
            <Avatar
                source={{
                    uri: profile.avatar
                        ? profile.avatar.url
                        : `https://api.adorable.io/avatar/50/${profile.name}.png`,
                }}
            />
            <TextTitle>Nome Completo</TextTitle>
            <TextInfo>{profile.name}</TextInfo>

            <TextTitle>Email</TextTitle>
            <TextInfo>{profile.email}</TextInfo>

            <TextTitle>Data de cadastro</TextTitle>
            <TextInfo>{dateFormated}</TextInfo>

            <ButtonLogout onPress={handleLogout}>
                <LogoutText>Logout</LogoutText>
            </ButtonLogout>
        </Container>
    );
}

Profile.navigationOptions = {
    tabBarLabel: 'Meu perfil',
    // eslint-disable-next-line react/prop-types
    tabBarIcon: ({ tintColor }) => (
        <Icon name="user-circle" size={20} color={tintColor} />
    ),
};
