import React, { useState, useEffect } from 'react';
import { StatusBar, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { format, parseISO } from 'date-fns';
import { withNavigationFocus } from 'react-navigation';
import PropTypes from 'prop-types';
import api from '~/services/api';
import { signOut } from '~/store/modules/auth/actions';
import StepIndicatorDelivery from './StepIndicatorDelivery';

import {
    Container,
    Header,
    HeaderContent,
    Avatar,
    Info,
    TextHeader,
    Name,
    ButtonLogout,
    ListDeliveries,
    DeliveriesTitle,
    DeliveryText,
    StatusDelivery,
    ButtonPending,
    Status,
    StatusTextPending,
    StatusTextDelivered,
    ButtonDelivered,
    Deliveries,
    StepIndicatorContainer,
    Truck,
    NameDelivery,
    InfoDelivery,
    Date,
    DateText,
    DateValue,
    City,
    CityText,
    CityValue,
    ButtonDetails,
    ButtonDetailsText,
    FlatList,
} from './styles';

function Dashboard({ navigation, isFocused }) {
    const [deliveries, setDeliveries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selected, setSelected] = useState('pendente');
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.user.profile);

    function dateParsed(date) {
        return format(parseISO(date), 'dd/MM/yyyy');
    }

    function StatusValue(status) {
        switch (status) {
            case 'pendente':
                return 1;
            case 'retirada':
                return 2;
            case 'entregue':
                return 3;
            default:
                return 1;
        }
    }
    function handlePending() {
        setSelected('pendente');
    }

    useEffect(() => {
        if (isFocused) {
            handlePending();
        }
    }, [isFocused]);

    useEffect(() => {
        async function loadDeliveries() {
            if (selected === 'pendente') {
                setLoading(true);
                const responsePending = await api.get(
                    `deliveryman/${profile.id}/deliveries`
                );
                setDeliveries(responsePending.data);
                setSelected('1');
                setLoading(false);
            }

            if (selected === 'entregue') {
                setLoading(true);
                const responseCompleted = await api.get(
                    `deliveryman/${profile.id}/deliveries/completed`
                );
                setDeliveries(responseCompleted.data);
                setSelected('2');
                setLoading(false);
            }
        }
        loadDeliveries();
    }, [deliveries, profile.id, selected]);

    function handleLogout() {
        dispatch(signOut());
    }

    function handleDelivered() {
        setSelected('entregue');
    }
    return (
        <Container>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <Header>
                <HeaderContent>
                    <Avatar
                        source={{
                            uri: profile.avatar
                                ? profile.avatar.url
                                : `https://api.adorable.io/avatar/50/${profile.name}.png`,
                        }}
                    />
                    <Info>
                        <TextHeader>Bem vindo de volta,</TextHeader>
                        <Name>{profile.name}</Name>
                    </Info>
                </HeaderContent>
                <ButtonLogout onPress={handleLogout}>
                    <Icon name="logout" size={20} color="#e74040" />
                </ButtonLogout>
            </Header>

            <ListDeliveries>
                <DeliveriesTitle>
                    <DeliveryText>Entregas</DeliveryText>
                    <StatusDelivery>
                        <ButtonPending onPress={handlePending}>
                            <Status>
                                <StatusTextPending selected={selected}>
                                    Pendentes
                                </StatusTextPending>
                            </Status>
                        </ButtonPending>

                        <ButtonDelivered onPress={handleDelivered}>
                            <Status>
                                <StatusTextDelivered selected={selected}>
                                    Entregues
                                </StatusTextDelivered>
                            </Status>
                        </ButtonDelivered>
                    </StatusDelivery>
                </DeliveriesTitle>
                {loading ? (
                    <ActivityIndicator color="#7159c1" />
                ) : (
                    <FlatList
                        contentContainerStyle={{ paddingBottom: 150 }}
                        data={deliveries}
                        keyExtractor={(item) => String(item.id)}
                        renderItem={({ item }) => (
                            <Deliveries>
                                <StepIndicatorContainer>
                                    <Truck>
                                        <Icon
                                            name="truck"
                                            size={22}
                                            color="#7d40e7"
                                        />
                                        <NameDelivery>
                                            Encomenda {item.id}
                                        </NameDelivery>
                                    </Truck>
                                    <StepIndicatorDelivery
                                        position={StatusValue(item.status)}
                                    />
                                </StepIndicatorContainer>
                                <InfoDelivery>
                                    <Date>
                                        <DateText>Data</DateText>
                                        <DateValue>
                                            {dateParsed(item.createdAt)}
                                        </DateValue>
                                    </Date>

                                    <City>
                                        <CityText>Cidade</CityText>
                                        <CityValue>
                                            {item.recipient.cidade}
                                        </CityValue>
                                    </City>

                                    <ButtonDetails>
                                        <ButtonDetailsText
                                            onPress={() =>
                                                navigation.navigate('Details', {
                                                    delivery: item,
                                                    selected,
                                                })
                                            }
                                        >
                                            Ver detalhes
                                        </ButtonDetailsText>
                                    </ButtonDetails>
                                </InfoDelivery>
                            </Deliveries>
                        )}
                    />
                )}
            </ListDeliveries>
        </Container>
    );
}

Dashboard.navigationOptions = {
    tabBarLabel: 'Entregas',
    // eslint-disable-next-line react/prop-types
    tabBarIcon: ({ tintColor }) => (
        <Icon name="menu" size={20} color={tintColor} />
    ),
};

export default withNavigationFocus(Dashboard);

Dashboard.propTypes = {
    isFocused: PropTypes.bool.isRequired,
    navigation: PropTypes.object.isRequired,
    // eslint-disable-next-line react/no-unused-prop-types
    tintColor: PropTypes.string,
};

Dashboard.defaultProps = {
    tintColor: PropTypes.string,
};
