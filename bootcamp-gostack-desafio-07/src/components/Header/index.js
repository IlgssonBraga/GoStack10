import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';

import {
    Wrapper,
    Container,
    LogoImage,
    CartIcon,
    ContainerCount,
    ItemCount,
    LogoLink,
} from './styles';

function Header({ navigation, cartSize }) {
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

export default connect(
    state => ({
        cartSize: state.cart.length,
    }),
    null
)(Header);
