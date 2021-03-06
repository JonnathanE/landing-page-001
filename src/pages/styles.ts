import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;

    > div {
        width: 50%;
        /* display: flex;
        flex-direction: column;
        align-items: center; */
    }

    h1 {
        color: #1e255e;
        font-size: 56px;
        font-weight: bold;
    }

    h6 {
        font-weight: normal;
        font-size: 16px;
        color: rgba(30, 37, 94, 0.7);
        padding-right: 150px;
        margin-top: 25px;
    }
`;

export const ColumnImg = styled.div`
    text-align: right;
    position: relative;

    img {
        margin-left: 112px;
        width: 407px;
        height: 470px;
    }
`;