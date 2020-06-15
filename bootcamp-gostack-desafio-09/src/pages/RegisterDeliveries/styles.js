import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    max-width: 700px;
    margin: 30px auto;
    form {
        #conteudo {
            display: flex;
            justify-content: space-between;
            span {
                font-size: 18px;
                font-weight: bold;
            }

            div {
                display: flex;
                button#voltar {
                    background: gray;
                    border: 0;
                    color: #fff;
                    display: flex;
                    align-items: center;
                    padding: 5px 15px;
                    border-radius: 4px;

                    &:hover {
                        background: ${darken(0.03, 'gray')};
                    }
                }

                button#salvar {
                    background: #7159c1;
                    border: 0;
                    color: #fff;
                    display: flex;
                    align-items: center;
                    padding: 5px 15px;
                    border-radius: 4px;
                    margin-left: 10px;

                    &:hover {
                        background: ${darken(0.03, '#7159c1')};
                    }
                }
            }
        }
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    background: #fff;
    margin-top: 20px;
    padding: 25px;
    div {
        display: flex;
        label {
            font-weight: bold;
            & + label {
                margin-left: 18px;
            }
            input {
                display: block;
                height: 30px;
                width: 315px;
                border-radius: 4px;
                border: 2px solid #eee;
                margin-top: 5px;
            }
        }
    }

    span {
        margin-top: 20px;
        label {
            font-weight: bold;
            input {
                display: block;
                height: 30px;
                width: 646px;
                border-radius: 4px;
                border: 2px solid #eee;
                margin-top: 5px;
            }
        }
    }
`;
