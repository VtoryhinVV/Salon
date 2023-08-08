import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const BuyGiftSection = styled.section `
    padding: 120px 0;

    h1, h2, p, span {
        margin: 0;
        padding: 0;
    }

    & > div {
        display: flex;
        gap: 60px;

        align-items: center;
    }
`

export const BuyGiftImgContainer = styled.div `
    display: flex;
    align-items: end;
    gap: 30px;
`

export const BuyGiftTextContainer = styled.div `
    text-align: center;
    align-items: center;
    
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const BuyGiftTitle = styled.h2 `
    display: flex;
    flex-direction: column;

    font-family: Prata, serif;
    font-size: 32px;
    letter-spacing: 0.64px;
    font-weight: 400;
`

export const BuyGiftButton = styled(Link) `
    padding: 12px 24px;
    margin-top: 24px;

    width: 217px;

    border: 1px solid var(--brown);
    color: var(--brown);

    text-decoration: none;
`