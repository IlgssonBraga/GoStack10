import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
    flex: 1;
    background: #fff;
`;

export const Background = styled.View`
    background: #7d40e7;
    height: 150px;
`;

export const Content = styled.View`
    background: #fff;
    width: 330px;
    align-self: center;
    margin-top: 60px;
    border: 1px solid #eee;
    border-radius: 4px;
    padding: 12px;
`;

export const ButtonSend = styled(RectButton)`
    align-items: center;
    width: 92%;
    background: #7d40e7;
    padding: 12px;
    border-radius: 4px;
    margin-top: 20px;

    align-self: center;
`;

export const ButtonSendText = styled.Text`
    color: #fff;
    font-weight: bold;
    text-align: center;
`;
