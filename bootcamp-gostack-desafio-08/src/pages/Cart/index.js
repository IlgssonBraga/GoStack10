import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { bindActionCreators } from 'redux';
import { connect, useDispatch, useSelector } from 'react-redux';
import { formatPrice } from '../../utils/format';
import * as CartActions from '../../store/modules/cart/actions';
import {
    Container,
    Product,
    ProductKey,
    ProductInfo,
    ProductImage,
    ProductValues,
    ProductTitle,
    ProductPrice,
    ProductDelete,
    ProductDetails,
    ProductAmount,
    ButtonAdd,
    InputAmount,
    ButtonRemove,
    ProductSubTotal,
    ProductTotal,
    ProductPriceText,
    TotalTitle,
    TotalPrice,
    ButtonFinish,
    ButtonFinishText,
    EmptyContainer,
    EmptyText,
} from './styles';

export default function Cart({ navigation }) {
    const total = useSelector(state =>
        formatPrice(
            state.cart.reduce(
                (totalSum, product) =>
                    totalSum + product.price * product.amount,
                0
            )
        )
    );

    const products = useSelector(state =>
        state.cart.map(product => ({
            ...product,
            subtotal: formatPrice(product.price * product.amount),
            priceFormatted: formatPrice(product.price),
        }))
    );

    const dispatch = useDispatch();

    function increment(product) {
        dispatch(
            CartActions.updateAmountRequest(product.id, product.amount + 1)
        );
    }

    function decrement(product) {
        dispatch(
            CartActions.updateAmountRequest(product.id, product.amount - 1)
        );
    }

    function removeFromCart(id) {
        dispatch(CartActions.removeFromCart(id));
    }

    return (
        <>
            <Container>
                {products.length ? (
                    <Product>
                        {products.map(product => (
                            <>
                                <ProductKey key={product.id}>
                                    <ProductInfo>
                                        <ProductImage
                                            source={{
                                                uri: product.image,
                                            }}
                                        />

                                        <ProductValues>
                                            <ProductTitle>
                                                {product.title}
                                            </ProductTitle>
                                            <ProductPrice>
                                                <ProductPriceText>
                                                    {product.priceFormatted}
                                                </ProductPriceText>

                                                <ProductDelete
                                                    onPress={() =>
                                                        removeFromCart(
                                                            product.id
                                                        )
                                                    }
                                                >
                                                    <Icon
                                                        name="remove-shopping-cart"
                                                        size={20}
                                                        color="#7159c1"
                                                    />
                                                </ProductDelete>
                                            </ProductPrice>
                                        </ProductValues>
                                    </ProductInfo>

                                    <ProductDetails>
                                        <ProductAmount>
                                            <ButtonAdd
                                                onPress={() =>
                                                    decrement(product)
                                                }
                                            >
                                                <Icon
                                                    name="remove-circle-outline"
                                                    size={20}
                                                    color="#7159c1"
                                                />
                                            </ButtonAdd>
                                            <InputAmount
                                                value={String(product.amount)}
                                            />
                                            <ButtonRemove
                                                onPress={() =>
                                                    increment(product)
                                                }
                                            >
                                                <Icon
                                                    name="add-circle-outline"
                                                    size={20}
                                                    color="#7159c1"
                                                />
                                            </ButtonRemove>
                                        </ProductAmount>
                                        <ProductSubTotal>
                                            {product.subtotal}
                                        </ProductSubTotal>
                                    </ProductDetails>
                                </ProductKey>
                            </>
                        ))}

                        <ProductTotal>
                            <TotalTitle>TOTAL</TotalTitle>
                            <TotalPrice>{total}</TotalPrice>
                            <ButtonFinish>
                                <ButtonFinishText>
                                    COMPLETE ORDER
                                </ButtonFinishText>
                            </ButtonFinish>
                        </ProductTotal>
                    </Product>
                ) : (
                    <Product>
                        <EmptyContainer>
                            <Icon
                                name="remove-shopping-cart"
                                size={64}
                                color="#eee"
                            />
                            <EmptyText>Your cart is empty.</EmptyText>
                        </EmptyContainer>
                    </Product>
                )}
            </Container>
        </>
    );
}
