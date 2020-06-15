import React, { useState } from 'react';
import { useCamera } from 'react-native-camera-hooks';
import { useSelector } from 'react-redux';
import { StatusBar, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import api from '~/services/api';
import {
    Container,
    BG,
    ButtonTakePicture,
    ButtonSend,
    ButtonSendText,
    Camera,
    Space,
} from './styles';

export default function ConfirmProblem({ initialProps, navigation }) {
    const profile = useSelector((state) => state.user.profile);

    const delivery = navigation.getParam('delivery');
    const [
        { cameraRef, type, ratio, autoFocus, autoFocusPoint },
        { takePicture },
    ] = useCamera(initialProps);

    const [picture, setPicture] = useState(null);

    async function handlePicture() {
        const data = await takePicture({ quality: 0.5, base64: true });
        setPicture(data);
    }

    async function handleSubmit() {
        try {
            const data = new FormData();
            data.append('file', {
                uri: picture.uri,
                name: 'signature.jpg',
                type: 'image/jpeg',
            });

            await api.put(
                `deliveryman/${profile.id}/enddelivery/${delivery.id}`,
                data
            );

            Alert.alert('Entrega confirmada com sucesso');
            navigation.navigate('Dashboard');
        } catch (err) {
            console.tron.log(err);
            Alert.alert(
                'Não foi possível confirmar a entrega',
                'Houve um erro em nosso sistema'
            );
        }
    }

    return (
        <Container>
            <StatusBar barStyle="light-content" backgroundColor="#7d40e7" />
            <BG />
            <Space />
            <Camera
                ref={cameraRef}
                autoFocusPointOfInterest={autoFocusPoint.normalized}
                type={type}
                ratio={ratio}
                autoFocus={autoFocus}
            />
            <ButtonTakePicture onPress={handlePicture}>
                <Icon name="camera" size={27} color="rgba(0,0,0,0.15)" />
            </ButtonTakePicture>
            <ButtonSend onPress={handleSubmit}>
                <ButtonSendText>Enviar</ButtonSendText>
            </ButtonSend>
        </Container>
    );
}

ConfirmProblem.navigationOptions = ({ navigation }) => ({
    title: 'Confirmar entrega',
    headerLeft: () => (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('Dashboard');
            }}
        >
            <Icon name="chevron-left" size={20} color="#FFF" />
        </TouchableOpacity>
    ),
});

ConfirmProblem.propTypes = {
    initialProps: PropTypes.object.isRequired,
    navigation: PropTypes.object.isRequired,
};
