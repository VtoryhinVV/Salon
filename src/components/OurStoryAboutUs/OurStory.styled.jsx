import styled from '@emotion/styled';

export const OurStorySection = styled.section `
    padding: 120px 0;

    h2, p, span {
        margin: 0;
        padding: 0;
    }

    & > div {
        display: flex;
        flex-direction: column;
        gap: 60px;
        align-items: center;
        text-align: center;

        @media screen and (min-width: 768px) {
            flex-direction: row;
            text-align: left;
        }
    }
`

export const OurStoryInfoContainer = styled.div `
    display: flex;
    flex-direction: column;
    gap: 24px;

    & > h2 {
        font-family: Prata;
        font-size: 34px;
        letter-spacing: 0.68px;
        font-weight: 400;

        @media screen and (min-width: 768px) {
            font-size: 48px;
            letter-spacing: 0.96px;
        }
    }

    & > button {
        margin: 16px auto 0;
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

        @media screen and (min-width: 768px) {
            margin: 16px 0 0;
        }
    }
`  

export const OurStoryTextContainer = styled.div `
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const OurStoryImg = styled.img `
    width: 300px;

    @media screen and (min-width: 400px) {
        width: 380px;
    }

    @media screen and (min-width: 1200px) {
        width: auto
    }
`