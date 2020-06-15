import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';

import { formatPrice } from '../../utils/format';

import {
    Container,
    Products,
    ProductImage,
    ProductPrice,
    ProductTitle,
    ButtonAddtoCart,
    ProductQuant,
    ProductQuantText,
    ButtonAddtoCartText,
} from './style';

class Main extends Component {
    state = {
        products: [],
    };

    componentDidMount() {
        this.getProducts();
    }

    getProducts = async () => {
        try {
            const response = await api.get('/products');

            const data = response.data.map(product => ({
                ...product,
                priceFormatted: formatPrice(product.price),
            }));

            this.setState({ products: data });
        } catch (error) {
            console.tron.log(error);
        }
    };

    handleAddProduct = id => {
        const { addToCartRequest } = this.props;

        addToCartRequest(id);
    };

    renderProduct = ({ item }) => {
        const { amount } = this.props;
        return (
            <Products key={item.id}>
                <ProductImage
                    source={{
                        uri: item.image,
                    }}
                />
                <ProductTitle>{item.title}</ProductTitle>
                <ProductPrice>{item.priceFormatted}</ProductPrice>
                <ButtonAddtoCart onPress={() => this.handleAddProduct(item.id)}>
                    <ProductQuant>
                        <Icon name="add-shopping-cart" color="#FFF" size={20} />
                        <ProductQuantText>
                            {amount[item.id] || 0}
                        </ProductQuantText>
                    </ProductQuant>
                    <ButtonAddtoCartText>ADD TO CART</ButtonAddtoCartText>
                </ButtonAddtoCart>
            </Products>
        );
    };

    render() {
        const { products } = this.state;
        return (
            <Container>
                <FlatList
                    horizontal
                    data={products}
                    extraData={this.props}
                    keyExtractor={item => String(item.id)}
                    renderItem={this.renderProduct}
                />
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    amount: state.cart.reduce((amount, product) => {
        amount[product.id] = product.amount;
        return amount;
    }, {}),
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
