import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
    flex: 1;
    background: #fff;
`;

export const Background = styled.View`
    background: #7d40e7;
    height: 100px;
`;

export const Content = styled.View`
    background: #fff;
    width: 330px;
    align-self: center;
    margin-top: 10px;
    border: 1px solid #eee;
    border-radius: 4px;
    padding: 12px;
`;

export const Title = styled.View`
    margin-top: 60px;
    align-items: center;
`;

export const TitleText = styled.Text`
    font-size: 20px;
    color: #fff;
    font-weight: bold;
`;

export const DescriptionText = styled.Text`
    color: rgba(0, 0, 0, 0.7);
`;

export const DateText = styled.Text`
    margin-top: 10px;
    color: rgba(0, 0, 0, 0.3);
`;

export const Box = styled.View`
    height: 400px;
`;
