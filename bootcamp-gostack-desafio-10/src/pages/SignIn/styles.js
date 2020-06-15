import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    background: #7d40e7;
    padding: 35px;
`;

export const Logo = styled.Image`
    align-self: center;
`;

export const TextInput = styled.TextInput`
    background: #fff;
    border-radius: 4px;
    font-size: 16px;
    padding: 7px 20px;
    color: rgba(0, 0, 0, 0.7);
    margin-top: 40px;
`;

export const ButtonSubmit = styled.TouchableOpacity`
    background: #82bf18;
    border-radius: 4px;
    margin-top: 10px;
`;

export const TextButton = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    padding: 10px;
    align-self: center;
`;
