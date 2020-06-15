import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
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

function Cart({
    navigation,
    products,
    total,
    removeFromCart,
    updateAmountRequest,
    dispatch,
}) {
    function increment(product) {
        updateAmountRequest(product.id, product.amount + 1);
    }

    function decrement(product) {
        updateAmountRequest(product.id, product.amount - 1);
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

const mapStateToProps = state => ({
    products: state.cart.map(product => ({
        ...product,
        subtotal: formatPrice(product.price * product.amount),
        priceFormatted: formatPrice(product.price),
    })),
    total: formatPrice(
        state.cart.reduce(
            (total, product) => total + product.price * product.amount,
            0
        )
    ),
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
