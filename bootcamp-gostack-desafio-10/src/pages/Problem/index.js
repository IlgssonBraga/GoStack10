import React, { useState } from 'react';

import { TouchableOpacity, StatusBar, Alert } from 'react-native';
import Textarea from 'react-native-textarea';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import api from '~/services/api';

import {
    Container,
    Background,
    Content,
    ButtonSend,
    ButtonSendText,
} from './styles';

export default function Problem({ navigation }) {
    const [description, setDescription] = useState('');
    const delivery = navigation.getParam('delivery');

    async function handleSubmit() {
        try {
            await api.post(`delivery/${delivery.id}/problems`, { description });
            navigation.navigate('Dashboard');
        } catch (error) {
            Alert.alert('Erro', 'Não foi possível cadastrar problema');
        }
    }

    return (
        <Container>
            <StatusBar barStyle="light-content" backgroundColor="#7d40e7" />
            <Background>
                <Content>
                    <Textarea
                        maxLength={240}
                        placeholder="Inclua aqui o problema que ocorreu na entrega"
                        placeholderTextColor="#c7c7c7"
                        underlineColorAndroid="transparent"
                        onChangeText={setDescription}
                        value={description}
                    />
                </Content>
                <ButtonSend onPress={handleSubmit}>
                    <ButtonSendText>Enviar</ButtonSendText>
                </ButtonSend>
            </Background>
        </Container>
    );
}

Problem.navigationOptions = ({ navigation }) => ({
    title: 'Informar problema',
    headerLeft: () => (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('Details');
            }}
        >
            <Icon name="chevron-left" size={20} color="#FFF" />
        </TouchableOpacity>
    ),
});

Problem.propTypes = {
    navigation: PropTypes.object.isRequired,
};
