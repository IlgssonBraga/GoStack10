import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    padding: 20px;
    background: #fff;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
`;

export const HeaderContent = styled.View`
    flex-direction: row;
`;

export const Avatar = styled.Image`
    width: 80px;
    height: 80px;
    background: #000;
    border-radius: 40px;
`;

export const Info = styled.View`
    margin: 10px 0 0 10px;
`;

export const TextHeader = styled.Text`
    color: rgba(0, 0, 0, 0.4);
`;

export const Name = styled.Text`
    font-size: 23px;
    font-weight: bold;
    margin-top: 3px;
    color: rgba(0, 0, 0, 0.8);
`;

export const ButtonLogout = styled.TouchableOpacity`
    margin-top: 24px;
`;

export const ListDeliveries = styled.View``;

export const DeliveriesTitle = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 30px;
    align-items: center;
`;

export const DeliveryText = styled.Text`
    font-size: 23px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.8);
`;

export const StatusDelivery = styled.View`
    flex-direction: row;
`;

export const ButtonPending = styled.TouchableOpacity``;

export const Status = styled.View``;

export const StatusTextPending = styled.Text`
    font-size: 13px;
    margin-left: 14px;
    font-weight: bold;
    color: ${(props) =>
        props.selected === '1' ? '#7d40e7' : 'rgba(0,0,0,0.3)'}
    border-bottom-width: ${(props) => (props.selected === '1' ? '1px' : '0')};
    border-bottom-color: ${(props) =>
        props.selected === '1' ? '#7d40e7' : '#fff'};
`;

export const StatusTextDelivered = styled.Text`
    font-size: 13px;
    margin-left: 14px;
    font-weight: bold;
    color: ${(props) =>
        props.selected === '2' ? '#7d40e7' : 'rgba(0,0,0,0.3)'}
    border-bottom-width: ${(props) => (props.selected === '2' ? '1px' : '0')};
    border-bottom-color: ${(props) =>
        props.selected === '2' ? '#7d40e7' : '#fff'};
`;

export const ButtonDelivered = styled.TouchableOpacity``;

export const Deliveries = styled.SafeAreaView`
    flex: 1;
    margin-top: 20px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
`;

export const StepIndicatorContainer = styled.View`
    padding: 12px;
`;

export const Truck = styled.View`
    flex-direction: row;
    align-items: baseline;
`;

export const NameDelivery = styled.Text`
    margin-bottom: 20px;
    color: #7d40e7;
    font-size: 16px;
    margin-left: 10px;
    font-weight: bold;
`;

export const InfoDelivery = styled.View`
    background: rgba(0, 0, 0, 0.1);
    flex-direction: row;
    justify-content: space-between;
    padding: 12px;
    align-items: center;
`;

export const Date = styled.View``;

export const DateText = styled.Text`
    font-size: 12px;
    color: rgba(0, 0, 0, 0.4);
`;

export const DateValue = styled.Text`
    font-size: 13px;
    color: rgba(0, 0, 0, 0.8);
    font-weight: bold;
`;

export const City = styled.View``;

export const CityText = styled.Text`
    font-size: 12px;
    color: rgba(0, 0, 0, 0.4);
`;

export const CityValue = styled.Text`
    font-size: 13px;
    color: rgba(0, 0, 0, 0.8);
    font-weight: bold;
`;

export const ButtonDetails = styled.TouchableOpacity`
    margin-top: 16px;
`;

export const ButtonDetailsText = styled.Text`
    font-size: 13px;
    font-weight: bold;
    color: #7d40e7;
`;

export const FlatList = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
})``;
