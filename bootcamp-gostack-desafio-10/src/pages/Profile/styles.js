import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    padding: 20px;
`;

export const Avatar = styled.Image`
    height: 120px;
    width: 120px;
    border-radius: 60px;
    margin: 30px 0;
    justify-content: center;
    align-self: center;
`;

export const TextTitle = styled.Text`
    font-size: 14px;
    color: rgba(0, 0, 0, 0.4);
`;

export const TextInfo = styled.Text`
    font-size: 22px;
    font-weight: bold;
`;

export const ButtonLogout = styled.TouchableOpacity`
    background: #e74040;
    border-radius: 4px;
    padding: 15px;
    align-items: center;
    margin-top: 25px;
`;

export const LogoutText = styled.Text`
    color: #fff;
    font-weight: bold;
`;
