import styled from 'styled-components/native';
import logo from '../../assets/images/Logo.png';

export const Wrapper = styled.SafeAreaView`
    flex-direction: row;
`;

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    background: #191920;
    height: 40px;
    align-items: center;
    flex: 1;
`;

export const LogoImage = styled.Image.attrs({
    source: logo,
    resizeMode: 'cover',
})``;

export const LogoLink = styled.TouchableOpacity``;

export const CartIcon = styled.View`
    flex-direction: row;
`;

export const ContainerCount = styled.View`
    background: #7159c1;
    width: 16px;
    height: 16px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
`;

export const ItemCount = styled.Text`
    color: #fff;
`;
