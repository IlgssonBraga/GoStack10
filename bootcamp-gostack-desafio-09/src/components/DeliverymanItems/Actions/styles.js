import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Badge = styled.div`
    margin: 0 auto;
    margin-bottom: 33px;
    background: none;
    border: 0;
    cursor: pointer;
`;

export const Options = styled.ul`
    position: absolute;
    width: 150px;
    left: calc(100% - 230px);
    background: #fff;
    border: 1px solid #eee;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    color: black;

    button {
        border: 0;
        color: black;
        background: none;
        border-bottom: 1px solid black;
    }

    span {
        margin-left: 5px;
    }

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
`;

export const ActionList = styled.ul`
    visibility: ${props => (props.visible ? 'visible' : 'hidden')};
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;

    img {
        height: 70px;
    }

    p {
        display: flex;
        align-items: center;
    }

    strong {
        display: flex;
        justify-content: space-between;
        margin-right: 5px;

        button {
            background: #7159c1;
            color: ${darken(0.03, 'red')}
            &:hover {
                background: ${darken(0.03, '#7159c1')};
            }
        }
    }
`;
