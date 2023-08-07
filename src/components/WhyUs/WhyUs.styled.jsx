import styled from "@emotion/styled";

export const WhyUsSection = styled.section `
    padding: 120px 0;

    & > div {
        display: flex;
        gap: 30px;
        align-items: center;
    }
`

export const ImgContainer = styled.div `
    display: flex;
    gap: 30px;
    align-items: end;
`

export const TextContainer = styled.div `
    display: flex;
    flex-direction: column;
    gap: 24px;

    vertical-align: middle;

    color: var(--black);

    width: 33%;

    & > h2 {
        font-family: Prata;
        font-size: 48px;
    }
    & > div {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
    & > div > div {
        display: flex;
        gap: 24px;
    }
`

export const WhyUsText = styled.p `
    display: flex;
    align-items: center;
    gap: 9px;
`

export const DedicatedText = styled.p `
    font-family: Prata;
    font-size: 40px;
`