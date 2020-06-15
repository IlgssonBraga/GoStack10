import styled from 'styled-components';
import { lighten, darken } from 'polished';

export const Container = styled.div`
    margin: 30px auto;
    max-width: 1200px;
    display: flex;
    flex-direction: column;

    strong {
        font-size: 18px;
    }

    div {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;

        span {
            position: relative;

            svg {
                position: absolute;
                left: 10px;
                top: 4px;
            }
            input {
                border-radius: 4px;
                border: 1px solid #eee;
                font-size: 16px;
                padding: 5px;
            }
        }

        input[type='text'] {
            padding-left: 40px;
        }

        button {
            border: 0;
            background: #7159c1;
            border-radius: 4px;
            color: #fff;
            padding: 5px 20px;
            display: flex;
            align-items: center;
        }
    }

    table {
        margin-top: 20px;
        border: 0;
        border-collapse: collapse;

        thead {
            th {
                padding: 10px 5px;
            }
        }

        tbody {
            th {
                background: #fff;
                padding: 0 10px;
                font-weight: normal;
                border-bottom: 27px solid ${lighten(0.45, 'gray')};
                color: ${lighten(0.2, '#000')};
                max-width: 800px;
                button {
                    margin-top: 7px;
                    position: relative;
                    border: 0;
                    background: none;
                    color: ${lighten(0.1, 'gray')};
                }

                img {
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                }
            }
        }
    }
`;

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
        padding: 10px;
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
    width: 100px;
    left: calc(50% - 50px);
    top: calc(100% + 10px);
    background: #fff;
    border: 1px solid gray;
    border-radius: 4px;
    padding: 5px;

    display: ${props => (props.visible && props.id ? 'block' : 'none')};

    &::before {
        content: '';
        position: absolute;
        left: calc(50% - 10px);
        top: -10px;
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid gray;
    }
`;

export const PageContainer = styled.div`
    font-size: 22px;
    color: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;

    span {
        margin: 0 10px 20px 10px;
    }

    button#left {
        background: #7159c1;
        border: 0;
        color: #fff;
        padding: 3px 20px;
        margin-top: -20px;
        border-radius: 4px;
        opacity: ${props => (props.page === 1 ? '0.4' : '1')};
        cursor: ${props => (props.page === 1 ? 'not-allowed' : 'pointer')};
        &:hover {
            background: ${props =>
                props.page === 1 ? '#7159c1' : darken(0.1, '#7159c1')};
        }
    }

    button#right {
        background: #7159c1;
        border: 0;
        color: #fff;
        padding: 3px 20px;
        margin-top: -20px;
        border-radius: 4px;
        opacity: ${props => (props.length === 0 ? '0.4' : '1')};
        cursor: ${props => (props.length === 0 ? 'not-allowed' : 'pointer')};
        &:hover {
            background: ${darken(0.1, '#7159c1')};
        }
    }
`;
