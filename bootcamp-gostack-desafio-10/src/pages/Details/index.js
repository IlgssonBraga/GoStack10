/* eslint-disable no-nested-ternary */
import React from 'react';
import { TouchableOpacity, StatusBar, Text, Alert } from 'react-native';
import { format, parseISO } from 'date-fns';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

import {
    Container,
    Background,
    Content,
    Title,
    TitleText,
    Recipient,
    RecipientTitle,
    RecipientValue,
    Address,
    AddressTitle,
    AddressValue,
    Product,
    ProductTitle,
    ProductValue,
    StatusDelivery,
    InfoDelivery,
    Status,
    StatusText,
    Date,
    DateStart,
    DateStartTitle,
    DateStartValue,
    DateFinish,
    DateFinishTitle,
    DateFinishValue,
    Buttons,
    ButtonInformProblem,
    ButtonInformProblemText,
    ButtonViewProblem,
    ButtonViewProblemText,
    ButtonConfirmDelivery,
    ButtonConfirmDeliveryText,
    ButtonStartDelivery,
    ButtonStartDeliveryText,
} from './styles';
import api from '~/services/api';

export default function Details({ navigation }) {
    const delivery = navigation.getParam('delivery');
    const selected = navigation.getParam('selected');

    async function handleStartDelivery() {
        try {
            await api.put(
                `deliveryman/${delivery.deliveryman_id}/startdelivery/${delivery.id}`
            );
            navigation.navigate('Dashboard');
        } catch (error) {
            Alert.alert('Erro', 'Não foi possível retirar a encomenda');
        }
    }

    function dateParsed(date) {
        return date ? format(parseISO(date), 'dd/MM/yyyy') : '- -/- -/- - - -';
    }
    return (
        <Container>
            <StatusBar barStyle="light-content" backgroundColor="#7d40e7" />
            <Background>
                <Content>
                    <Title>
                        <Icon name="truck" size={22} color="#7d40e7" />
                        <TitleText>Informações da Entrega</TitleText>
                    </Title>
                    <Recipient>
                        <RecipientTitle>DESTINATÁRIO</RecipientTitle>
                        <RecipientValue>
                            {delivery.recipient.nome}
                        </RecipientValue>
                        <Address>
                            <AddressTitle>ENDEREÇO DE ENTREGA</AddressTitle>
                            <AddressValue>
                                {delivery.recipient.rua},{' '}
                                {delivery.recipient.numero},{' '}
                                {delivery.recipient.cidade} -{' '}
                                {delivery.recipient.estado},{' '}
                                {delivery.recipient.cep}
                            </AddressValue>
                        </Address>
                        <Product>
                            <ProductTitle>PRODUTO</ProductTitle>
                            <ProductValue>{delivery.product}</ProductValue>
                        </Product>
                    </Recipient>
                </Content>
                <StatusDelivery>
                    <Title>
                        <Icon name="truck" size={22} color="#7d40e7" />
                        <TitleText>Informações da Entrega</TitleText>
                    </Title>
                    <InfoDelivery>
                        <Status>STATUS</Status>
                        <StatusText>{delivery.status}</StatusText>
                        <Date>
                            <DateStart>
                                <DateStartTitle>
                                    DATA DE RETIRADA
                                </DateStartTitle>
                                <DateStartValue>
                                    {dateParsed(delivery.start_date)}
                                </DateStartValue>
                            </DateStart>

                            <DateFinish>
                                <DateFinishTitle>
                                    DATA DE ENTREGA
                                </DateFinishTitle>
                                <DateFinishValue>
                                    {dateParsed(delivery.end_date)}
                                </DateFinishValue>
                            </DateFinish>
                        </Date>
                    </InfoDelivery>
                </StatusDelivery>
                {selected === '1' && delivery.start_date !== null ? (
                    <Buttons>
                        <ButtonInformProblem
                            onPress={() =>
                                navigation.navigate('Problem', { delivery })
                            }
                        >
                            <Icon
                                name="close-circle-outline"
                                size={20}
                                color="#e95657"
                            />
                            <ButtonInformProblemText>
                                Informar Problema
                            </ButtonInformProblemText>
                        </ButtonInformProblem>

                        <ButtonViewProblem
                            onPress={() =>
                                navigation.navigate('ViewProblems', {
                                    delivery,
                                })
                            }
                        >
                            <Icon
                                name="alert-circle-outline"
                                size={20}
                                color="#eccd79"
                            />
                            <ButtonViewProblemText>
                                Visualizar Problemas
                            </ButtonViewProblemText>
                        </ButtonViewProblem>

                        <ButtonConfirmDelivery
                            onPress={() =>
                                navigation.navigate('ConfirmProblem', {
                                    delivery,
                                })
                            }
                        >
                            <Icon
                                name="check-circle-outline"
                                size={20}
                                color="#7d40e7"
                            />
                            <ButtonConfirmDeliveryText>
                                Confirmar Entrega
                            </ButtonConfirmDeliveryText>
                        </ButtonConfirmDelivery>
                    </Buttons>
                ) : selected === '1' && delivery.start_date === null ? (
                    <Buttons>
                        <ButtonStartDelivery onPress={handleStartDelivery}>
                            <Icon name="truck" size={20} color="#7d40e7" />
                            <ButtonStartDeliveryText>
                                Retirar encomenda
                            </ButtonStartDeliveryText>
                        </ButtonStartDelivery>
                    </Buttons>
                ) : (
                    <Text />
                )}
            </Background>
        </Container>
    );
}

Details.navigationOptions = ({ navigation }) => ({
    title: 'Detalhes da encomenda',
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

Details.propTypes = {
    navigation: PropTypes.object.isRequired,
};
