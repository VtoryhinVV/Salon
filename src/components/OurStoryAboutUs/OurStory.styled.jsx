import styled from '@emotion/styled';

export const OurStorySection = styled.section `
    padding: 120px 0;

    h2, p, span {
        margin: 0;
        padding: 0;
    }

    & > div {
        display: flex;
        gap: 60px;
        align-items: center;
    }
`

export const OurStoryInfoContainer = styled.div `
    display: flex;
    flex-direction: column;
    gap: 24px;

    width: 588px;             /* DELETE */

    & > h2 {
        font-family: Prata;
        font-size: 48px;
        letter-spacing: 0.96px;
        font-weight: 400;
    }

    & > button {
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
    }
`  

export const OurStoryTextContainer = styled.div `
    display: flex;
    flex-direction: column;
    gap: 16px;
`