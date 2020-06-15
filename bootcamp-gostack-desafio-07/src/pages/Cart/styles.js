import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 30px;
    flex: 1;
    border-radius: 4px;
`;

export const Product = styled.View`
    background: #fff;
    max-width: 300px;
    border-radius: 4px;
    padding: 10px;
`;

export const ProductKey = styled.View``;

export const ProductInfo = styled.View`
    flex-direction: row;
    margin-top: 15px;
`;

export const ProductImage = styled.Image`
    width: 90px;
    height: 90px;
`;

export const ProductValues = styled.View`
    max-width: 210px;
`;

export const ProductTitle = styled.Text`
    margin-top: 5px;
    font-size: 16px;
    line-height: 20px;
`;

export const ProductPrice = styled.View`
    justify-content: space-between;
    flex-direction: row;
    max-width: 180px;
    align-items: center;
    margin-top: 20px;
`;

export const ProductDelete = styled.TouchableOpacity``;

export const ProductPriceText = styled.Text`
    font-weight: bold;
    font-size: 18px;
`;

export const ProductDetails = styled.View`
    flex-direction: row;
    justify-content: space-between;
    background: lightgray;
    margin-top: 20px;
    border-radius: 4px;
`;

export const ProductAmount = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const ButtonAdd = styled.TouchableOpacity``;

export const InputAmount = styled.TextInput.attrs({
    readonly: true,
})`
    background: #fff;
    padding: 5px;
    margin: 0 5px;
    border: 1px solid #ddd;
    border-radius: 4px;
    min-width: 52px;
`;

export const ButtonRemove = styled.TouchableOpacity``;

export const ProductSubTotal = styled.Text`
    font-size: 20px;
    font-weight: bold;
    margin: 5px 10px;
`;

export const ProductTotal = styled.View`
    align-items: center;
    justify-content: center;
`;

export const TotalTitle = styled.Text`
    margin-top: 20px;
    color: gray;
    font-size: 16px;
`;

export const TotalPrice = styled.Text`
    font-size: 22px;
    color: #7159c1;
    font-weight: bold;
`;

export const ButtonFinish = styled.TouchableOpacity`
    margin-top: 20px;
    background: #7159c1;
`;

export const ButtonFinishText = styled.Text`
    color: #fff;
    padding: 15px;
`;

export const EmptyContainer = styled.View`
    align-items: center;
    justify-content: center;
`;

export const EmptyText = styled.Text`
    font-size: 20px;
    font-weight: bold;
    margin-top: 18px;
    color: #191920;
`;
