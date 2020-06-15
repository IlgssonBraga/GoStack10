import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    margin: 30px 0 32px 37px;
`;

export const Badge = styled.div`
    background: none;
    border: 0;
    cursor: pointer;
`;

export const Options = styled.ul`
    position: absolute;
    width: 200px;
    left: calc(100% - 235px);
    background: #fff;
    border: 1px solid #eee;
    margin-top: 60px;
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
    padding: 20px;

    strong {
        div#btnclose {
            display: flex;
            align-items: center;
            justify-content: space-between;
            button {
                background: #7159c1;
                margin-left: 30px;
                color: #fff;

                &:hover {
                    background: ${darken(0.03, '#7159c1')};
                }
            }
        }

        p {
            font-weight: normal;
            font-size: 14px;
            line-height: 20px;
            margin-top: 20px;
            text-align: left;
        }
    }
`;
