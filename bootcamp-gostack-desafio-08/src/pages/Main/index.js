import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
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

export default function Main() {
    const amount = useSelector(state =>
        state.cart.reduce((amountSum, product) => {
            amountSum[product.id] = product.amount;
            return amountSum;
        }, {})
    );
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        async function getProducts() {
            const response = await api.get('/products');

            const data = response.data.map(product => ({
                ...product,
                priceFormatted: formatPrice(product.price),
            }));
            setProducts(data);
        }

        getProducts();
    }, []);

    function handleAddProduct(id) {
        dispatch(CartActions.addToCartRequest(id));
    }

    function renderProduct({ item }) {
        return (
            <Products key={item.id}>
                <ProductImage
                    source={{
                        uri: item.image,
                    }}
                />
                <ProductTitle>{item.title}</ProductTitle>
                <ProductPrice>{item.priceFormatted}</ProductPrice>
                <ButtonAddtoCart onPress={() => handleAddProduct(item.id)}>
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
    }

    return (
        <Container>
            <FlatList
                horizontal
                data={products}
                keyExtractor={item => String(item.id)}
                renderItem={renderProduct}
            />
        </Container>
    );
}
