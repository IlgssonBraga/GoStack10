import styled from 'styled-components/native';

export const Container = styled.View`
    background: #191920;
`;

export const Products = styled.View`
    background: #fff;
    border-radius: 4px;
    padding: 10px;
    max-width: 220px;
    margin: 15px;
`;

export const ProductImage = styled.Image`
    width: 200px;
    height: 200px;
`;

export const ProductPrice = styled.Text`
    font-weight: bold;
    font-size: 18px;
    margin: 14px 0px;
`;

export const ProductTitle = styled.Text`
    font-size: 15px;
`;

export const ButtonAddtoCart = styled.TouchableOpacity`
    background: #7159c1;
    border-radius: 4px;
    margin-top: auto;
    flex-direction: row;
    align-items: center;
`;

export const ProductQuant = styled.View`
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    flex-direction: row;
    align-items: center;
    padding: 12px;
`;

export const ProductQuantText = styled.Text`
    color: #fff;
    margin: 0px 2px 0px 5px;
`;

export const ButtonAddtoCartText = styled.Text`
    color: #fff;
    font-weight: bold;
    text-align: center;
    flex: 1;
`;
