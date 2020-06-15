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

export const ActionsList = styled.ul`
    position: absolute;
    width: 200px;
    left: calc(50% - 100px);
    top: calc(100% + 15px);
    background: #fff;
    border: 1px solid ${darken(0.05, '#eee')};
    border-radius: 4px;
    padding: 15px;

    hr {
        border: 1px solid ${lighten(0.3, 'gray')};
    }

    visibility: ${props => (props.visible ? 'visible' : 'hidden')};

    &::before {
        content: '';
        position: absolute;
        left: calc(50% - 10px);
        top: -10px;
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid ${darken(0.05, '#eee')};
    }

    p {
        display: flex;
        align-items: center;

        button {
            display: flex;
            span {
                margin-left: 5px;
            }
        }

        span {
            color: gray;
        }
    }
`;

export const ViewDelivery = styled.div`
    visibility: ${props => (props.visibleView ? 'visible' : 'hidden')};
    position: absolute;
    background: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 100%;
    top: -20px;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ViewDeliveryContainer = styled.div`
    margin: 0 auto;
    width: 400px;
    height: 300px;
    background: #fff;
    border-radius: 4px;
    padding: 20px;

    p {
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        margin-top: 10px;
    }
`;
