import styled from 'styled-components/native';
import { RNCamera } from 'react-native-camera';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    background-color: #ffffff;
`;

export const BG = styled.View`
    width: 100%;
    height: 170px;
    background-color: #7d40e7;
    align-items: center;
`;

export const ButtonTakePicture = styled(RectButton)`
    width: 61px;
    height: 61px;
    border-radius: 30.5px;
    align-self: center;
    background-color: rgba(255, 255, 255, 0.2);
    justify-content: center;
    align-items: center;
    margin-top: 100px;
`;

export const ButtonSend = styled(RectButton)`
    width: 90%;
    height: 45px;
    margin-top: 20px;
    align-self: center;
    background-color: #7d40e7;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
`;

export const ButtonSendText = styled.Text`
    font-weight: bold;
    font-size: 16px;
    color: #fff;
`;

export const Camera = styled(RNCamera)`
    margin-top: 20px;
    width: 200px;
    height: 10px;
    align-self: center;
    border-radius: 4px;
`;

export const Space = styled.View`
    margin-bottom: 70px;
`;
