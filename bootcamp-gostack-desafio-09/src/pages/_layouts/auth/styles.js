import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #7159c1;
`;

export const Content = styled.div`
    width: 100%;
    padding: 50px 25px;
    max-width: 350px;
    text-align: center;
    background: #fff;
    border-radius: 4px;
    form {
        display: flex;
        flex-direction: column;
        margin-top: 30px;
        input {
            background: #fff;
            border: 1px solid #eee;
            border-radius: 4px;
            height: 44px;
            padding: 0 15px;
            color: #000;
            margin: 0 0 10px;
        }
        span {
            color: ${lighten(0.03, '#000')};
            align-self: flex-start;
            margin: 0 0 10px;
            font-weight: bold;
            font-size: 12px;
        }
        button {
            margin: 5px 0 0;
            height: 44px;
            background: #7159c1;
            font-weight: bold;
            color: #fff;
            border-radius: 4px;
            border: 0;
            font-size: 16px;
            transition: background 0.2s;
            &:hover {
                background: ${darken(0.03, '#7159c1')};
            }
        }
        a {
            color: #fff;
            margin-top: 15px;
            font-size: 16px;
            opacity: 0.8;
            &:hover {
                opacity: 1;
            }
        }
    }
`;
