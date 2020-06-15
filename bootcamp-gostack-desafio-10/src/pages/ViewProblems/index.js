import React, { useState, useEffect } from 'react';
import { StatusBar, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { format, parseISO } from 'date-fns';
import PropTypes from 'prop-types';
import api from '~/services/api';
import {
    Container,
    Background,
    Content,
    Title,
    TitleText,
    DescriptionText,
    DateText,
    Box,
} from './styles';

export default function ViewProblems({ navigation }) {
    const [problems, setProblems] = useState([]);
    const delivery = navigation.getParam('delivery');

    useEffect(() => {
        async function loadProblems() {
            const response = await api.get(`deliverys/${delivery.id}/problems`);
            setProblems(response.data);
        }
        loadProblems();
    }, [problems, delivery.id]);

    function dateParsed(date) {
        return date ? format(parseISO(date), 'dd/MM/yyyy') : '- -/- -/- - - -';
    }
    return (
        <Container>
            <StatusBar barStyle="light-content" backgroundColor="#7d40e7" />
            <Background>
                <Title>
                    <TitleText>Encomenda {delivery.id}</TitleText>
                </Title>
            </Background>
            <Box>
                <FlatList
                    contentContainerStyle={{ paddingBottom: 20 }}
                    data={problems}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => (
                        <Content>
                            <DescriptionText>
                                {item.description}
                            </DescriptionText>
                            <DateText>{dateParsed(item.createdAt)}</DateText>
                        </Content>
                    )}
                />
            </Box>
        </Container>
    );
}

ViewProblems.navigationOptions = ({ navigation }) => ({
    title: 'Visualizar Problemas',
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

ViewProblems.propTypes = {
    navigation: PropTypes.object.isRequired,
};
