import styled from 'styled-components';

export const Loading = styled.div`
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const Owner = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
        color: #7159c1;
        font-size: 16px;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

    img {
        width: 120px;
        border-radius: 50%;
        margin-top: 20px;
    }

    h1 {
        font-size: 24px;
        margin-top: 10px;
    }

    p {
        margin-top: 5px;
        font-size: 14px;
        color: #666;
        line-height: 1.4;
        text-align: center;
        max-width: 400px;
    }
`;

export const IssueList = styled.ul`
    padding-top: 30px;
    margin-top: 30px;
    border-top: 1px solid #eee;
    list-style: none;

    select {
        background: #7159c1;
        color: #fff;
        margin-bottom: 30px;
        font-size: 16px;
        font-family: Arial, Helvetica, sans-serif;
    }

    li {
        display: flex;
        padding: 15px 10px;
        border: 1px solid #eee;
        border-radius: 4px;

        & + li {
            margin-top: 10px;
        }
    }

    img {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        border: 2px solid #eee;
    }

    div {
        flex: 1;
        margin-left: 15px;

        strong {
            font-size: 16px;

            a {
                text-decoration: none;
                color: #333;

                &:hover {
                    color: #7159c1;
                }
            }

            span {
                background: #eee;
                color: #333;
                border-radius: 2px;
                font-size: 12px;
                font-weight: 600;
                height: 20px;
                padding: 3px 4px;
                margin-left: 10px;
            }
        }

        p {
            margin-top: 5px;
            font-size: 12px;
            color: #999;
        }
    }

    #btn-pagination {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 15px;

        #beforebtn {
            background: #7159c1;
            border: 0;
            padding: 10px;
            opacity: ${props => (props.page === 1 ? 0.3 : 1)};
            color: #fff;
            font-family: Arial, Helvetica, sans-serif;
            pointer-events: ${props => (props.page === 1 ? 'none' : 'auto')};
            cursor: ${props => (props.page === 1 ? 'not-allowed' : 'pointer')};
        }

        #nextbtn {
            background: #7159c1;
            border: 0;
            padding: 10px;
            color: #fff;
            font-family: Arial, Helvetica, sans-serif;
        }
    }
`;
