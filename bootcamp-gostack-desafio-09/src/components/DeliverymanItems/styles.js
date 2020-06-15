import styled from 'styled-components';
import { lighten, darken } from 'polished';

export const Status = styled.div`
    width: 120px;
    height: 25px;
    margin: 0 auto;
    margin-bottom: 15px;
    display: flex;
    strong {
        background: ${props =>
            props.status === 'pendente'
                ? lighten(0.4, 'yellow')
                : props.status === 'cancelada'
                ? lighten(0.3, 'red')
                : props.status === 'retirada'
                ? lighten(0.42, 'blue')
                : lighten(0.6, 'green')};
        padding: 5px;
        border-radius: 20px;
        font-size: 13px;
        color: ${props =>
            props.status === 'pendente'
                ? darken(0.1, 'yellow')
                : props.status === 'cancelada'
                ? 'red'
                : props.status === 'retirada'
                ? lighten(0.12, 'blue')
                : 'green'};
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 10px;
        svg {
            color: ${props =>
                props.status === 'pendente'
                    ? darken(0.1, 'yellow')
                    : props.status === 'cancelada'
                    ? 'red'
                    : props.status === 'retirada'
                    ? lighten(0.12, 'blue')
                    : 'green'};
        }
    }
`;
