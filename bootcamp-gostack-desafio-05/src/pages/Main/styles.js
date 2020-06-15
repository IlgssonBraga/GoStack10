import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form`
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    input {
        flex: 1;
        border: 1px solid ${props => (props.error ? '#E83535' : '#eee')};
        padding: 10px 15px;
        border-radius: 4px;
        font-size: 16px;
    }

    ${props =>
        props.error &&
        css`
            input::placeholder {
                color: #e83535;
            }
        `}
`;

const rotate = keyframes`
from {
transform: rotate(0deg);
}
to {
transform: rotate(360deg);
}
`;

export const SubmitButton = styled.button.attrs(props => ({
    type: 'submit',
    disabled: props.loading,
}))`
    background: #7159c1;
    border: 0;
    padding: 0 10px;
    margin-left: 10px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    &[disabled] {
        cursor: not-allowed;
        opacity: 0.6;
    }
    ${props =>
        props.loading &&
        css`
            svg {
                animation: ${rotate} 2s linear infinite;
            }
        `}
    .plus {
        margin-left: 9px;
    }
    #containerbtn {
        margin-left: 9px;
        margin-top: 2px;
    }
`;

export const List = styled.ul`
    list-style: none;
    margin-top: 30px;
    li {
        padding: 15px 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        & + li {
            border-top: 1px solid #eee;
        }
        a {
            color: #7159c1;
            text-decoration: none;
        }
    }
`;
