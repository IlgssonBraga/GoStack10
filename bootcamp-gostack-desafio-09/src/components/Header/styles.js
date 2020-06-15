import styled from 'styled-components';
import { lighten, darken } from 'polished';

export const Container = styled.div`
    width: 100%;
    background: #fff;
    border: 1px solid #eee;
    padding: 10px;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 120px;
        margin-left: 15px;
        margin-top: 3px;
    }

    div {
        display: flex;
        align-items: center;
        border-left: 1px solid #eee;
        margin-left: 20px;

        a {
            font-weight: bold;
            color: gray;
            font-size:13px;
            margin-right: 15px;
            transition: color 0.2s;
            margin-left:20px;
            &:hover {
                color: #000;
            }

        & + a {
            margin-left: 10px;
        }

        }
        a.active-menu {
          color: #000;
        }
        }
    }
`;

export const LinkText = styled.text`
    color: ${props => (props.selected ? '#000' : '#D3D3D3')};
    font-weight: bold;
`;

export const Profile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 15px;
    strong {
        color: ${lighten(0.3, '#000')};
    }

    a {
        color: ${lighten(0.2, 'red')};
    }

    button {
        border: 0;
        background: none;
        color: ${darken(0.02, 'red')};

        &:hover {
            color: ${darken(0.09, 'red')};
        }
    }
`;
