import styled from 'styled-components';
import { lighten, darken } from 'polished';

export const Container = styled.div`
    max-width: 700px;
    margin: 30px auto;

    #container {
        display: flex;
        justify-content: space-between;

        strong {
            font-size: 22px;
        }

        div {
            display: flex;

            #voltar {
                background: ${lighten(0.1, 'gray')};
                border: 0;
                padding: 4px 12px;
                color: #fff;
                border-radius: 4px;
                display: flex;
                align-items: center;

                &:hover {
                    background: ${lighten(0.01, 'gray')};
                }
            }

            #salvar {
                background: #7159c1;
                border: 0;
                padding: 4px 12px;
                margin-left: 5px;
                color: #fff;
                border-radius: 4px;
                display: flex;
                align-items: center;

                &:hover {
                    background: ${darken(0.03, '#7159c1')};
                }
            }
        }
    }
`;

export const Content = styled.div`
    display: flex;
    margin-top: 20px;
    background: #fff;
    padding: 20px;
    border-radius: 4px;
    flex-direction: column;

    label {
        margin: 5px 17px;
        font-weight: bold;

        input {
            width: 634px;
            height: 30px;
            display: block;
            border-radius: 4px;
            border: 2px solid #eee;
            margin-top: 7px;
        }
    }

    div {
        display: flex;
        flex-direction: column;

        #files {
            margin: 0 auto;
            label {
                cursor: pointer;
                &:hover {
                    opacity: 0.7;
                }
                img {
                    height: 120px;
                    width: 120px;
                    border-radius: 50%;
                    border: 3px solid rgba(255, 255, 255, 0.3);
                    background: #eee;
                    border: 3px dotted #eee;
                }
                input {
                    display: none;
                }
            }
        }

        label {
            margin: 15px 17px;
            font-weight: bold;
        }

        input {
            width: 630px;
            height: 30px;
            display: block;
            border-radius: 4px;
            border: 2px solid #eee;
            margin-top: 7px;
        }
    }
`;
