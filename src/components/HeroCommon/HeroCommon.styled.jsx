import styled from '@emotion/styled';
import bgHero from '/img/bg.jpg';

export const HeroSection = styled.section`
    background-image: url(${bgHero});
    padding: 120px 0;

    h1, p, button {
        margin: 0;
    }
    & > div {
        text-align: center;
        align-items: center;

        display: flex;
        flex-direction: column;
        gap: 24px;
    }
`

export const HeroTitle = styled.h1 `
    font-family: Prata;
    font-size: 34px;
    letter-spacing: 0.68px;
    font-weight: 400;

    @media screen and (min-width: 768px) {
        font-size: 48px;
        letter-spacing: 0.96px;
    }
`

export const HeroText = styled.p `
    font-weight: 400;

    @media screen and (min-width: 768px) {
        font-weight: 700;
    }
`

export const HeroButton = styled.button `
    width: 225px;

    border: 1px solid var(--brown);
    background: var(--white, #fff);
    padding: 12px 24px;

    color: var(--brown);
    text-transform: uppercase;

    transition: all 0.3s ease;

    &:hover,
    &:focus {
        border-color: var(--focus);
        color: var(--focus);
    }
`