import styled from '@emotion/styled';

export const AdvantagesSection = styled.section `
    padding: 120px 0;

    ul, h2, h3, p, span {
        margin: 0;
        padding: 0;
    }

    & > div {
        display: flex;
        flex-direction: column;
        gap: 40px;

        text-align: center;
        align-items: center;
    }
`

export const AdvantagesTitle = styled.h2 `
    font-family: Prata;
    font-size: 48px;
    font-weight: 400;
    letter-spacing: 0.96px;

    margin-bottom: 40px !important;
`

export const AdvantagesList = styled.ul `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 80px;
    column-gap: 24px;

    list-style-type: none;
`

export const AdvantagesListItem = styled.li `
    display: flex;
    flex-direction: column;
    gap: 16px;

    position: relative;

    width: 304px;
    min-height: 304px;
    padding: 60px 40px 24px;
    box-sizing: border-box;

    box-shadow: var(--shadow);

    & > h3 {
        font-weight: 600;
    }

    & > svg {
        width: 80px;
        height: 80px;
        padding: 20px;
        box-sizing: border-box;

        background-color: var(--brown);
        fill: white;

        position: absolute;
        top: -40px;
        left: 50%;
        transform: translate(-50%)
    }
`

export const AdvantagesButton = styled.button `
    margin-top: 16px;
    padding: 12px 24px;
    width: 220px;

    border: none;

    background-color: var(--brown);
    color: white;

    transition: all 0.3s ease;

    &:hover,
    &:focus {
        background-color: var(--focus);
    }
`