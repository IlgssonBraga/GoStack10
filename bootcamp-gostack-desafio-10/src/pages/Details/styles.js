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

export const Title = styled.View`
    flex-direction: row;
`;

export const TitleText = styled.Text`
    color: #7d40e7;
    font-size: 16px;
    font-weight: bold;
    margin-left: 5px;
`;

export const Recipient = styled.View`
    margin-top: 5px;
`;

export const RecipientTitle = styled.Text`
    color: rgba(0, 0, 0, 0.35);
    font-weight: bold;
`;

export const RecipientValue = styled.Text`
    margin-top: 5px;
    color: rgba(0, 0, 0, 0.6);
`;

export const Address = styled.View`
    margin-top: 10px;
`;

export const AddressTitle = styled.Text`
    color: rgba(0, 0, 0, 0.35);
    font-weight: bold;
`;

export const AddressValue = styled.Text`
    margin-top: 5px;
    color: rgba(0, 0, 0, 0.6);
`;

export const Product = styled.View`
    margin-top: 10px;
`;

export const ProductTitle = styled.Text`
    color: rgba(0, 0, 0, 0.35);
    font-weight: bold;
`;

export const ProductValue = styled.Text`
    color: rgba(0, 0, 0, 0.6);
    margin-top: 5px;
`;

export const StatusDelivery = styled.View`
    background: #fff;
    width: 330px;
    align-self: center;
    margin-top: 10px;
    border: 1px solid #eee;
    border-radius: 4px;
    padding: 12px;
`;

export const InfoDelivery = styled.View``;

export const Status = styled.Text`
    margin-top: 5px;
    color: rgba(0, 0, 0, 0.35);
    font-weight: bold;
`;
export const StatusText = styled.Text`
    margin-top: 5px;
    color: rgba(0, 0, 0, 0.6);
`;

export const Date = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const DateStart = styled.View`
    margin-top: 10px;
`;

export const DateStartTitle = styled.Text`
    color: rgba(0, 0, 0, 0.35);
    font-weight: bold;
`;

export const DateStartValue = styled.Text`
    margin-top: 5px;
    color: rgba(0, 0, 0, 0.6);
`;

export const DateFinish = styled.View`
    margin-top: 10px;
`;

export const DateFinishTitle = styled.Text`
    color: rgba(0, 0, 0, 0.35);
    font-weight: bold;
`;

export const DateFinishValue = styled.Text`
    margin-top: 5px;
    color: rgba(0, 0, 0, 0.6);
`;

export const Buttons = styled.View`
    flex-direction: row;
    justify-content: center;
    margin-top: 5px;
`;

export const ButtonInformProblem = styled(RectButton)`
    width: 100px;
    padding: 10px;
    background: #eee;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 4px;

    align-items: center;
`;

export const ButtonInformProblemText = styled.Text`
    text-align: center;
    font-size: 12px;
    color: 1px solid rgba(0, 0, 0, 0.4);
`;

export const ButtonViewProblem = styled(RectButton)`
    width: 100px;
    padding: 10px;
    background: #eee;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    align-items: center;
    margin-left: 2px;
`;

export const ButtonViewProblemText = styled.Text`
    text-align: center;
    font-size: 12px;
    color: 1px solid rgba(0, 0, 0, 0.4);
`;

export const ButtonConfirmDelivery = styled(RectButton)`
    width: 100px;
    padding: 10px;
    background: #eee;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    align-items: center;
    margin-left: 2px;
`;

export const ButtonConfirmDeliveryText = styled.Text`
    text-align: center;
    font-size: 12px;
    color: 1px solid rgba(0, 0, 0, 0.4);
`;

export const ButtonStartDelivery = styled(RectButton)`
    width: 200px;
    padding: 10px;
    background: #eee;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    align-items: center;
    margin-left: 2px;
`;

export const ButtonStartDeliveryText = styled.Text`
    text-align: center;
    font-size: 12px;
    color: 1px solid rgba(0, 0, 0, 0.4);
`;
