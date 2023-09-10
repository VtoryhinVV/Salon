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

    & > a {
        margin: 16px auto 0;
        padding: 12px 24px;
        width: 225px;
        box-sizing: border-box;

        text-decoration: none;

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

export const OurStoryImgContainer = styled.div `
    display: flex;
    align-items: flex-end;
    gap: 30px;
`