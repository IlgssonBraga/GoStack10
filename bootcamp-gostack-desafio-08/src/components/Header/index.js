import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

import {
    Wrapper,
    Container,
    LogoImage,
    CartIcon,
    ContainerCount,
    ItemCount,
    LogoLink,
} from './styles';

export default function Header({ navigation }) {
    const cartSize = useSelector(state => state.cart.length);
    return (
        <Wrapper>
            <Container>
                <LogoLink onPress={() => navigation.navigate('Main')}>
                    <LogoImage />
                </LogoLink>

                <CartIcon>
                    <Icon
                        name="shopping-basket"
                        color="#FFF"
                        size={24}
                        onPress={() => navigation.navigate('Cart')}
                    />
                    <ContainerCount>
                        <ItemCount>{cartSize || 0}</ItemCount>
                    </ContainerCount>
                </CartIcon>
            </Container>
        </Wrapper>
    );
}
