import styled from '@emotion/styled';
import bgOurTeam from '/src/assets/img/bgOurTeam.jpg'

export const OurTeamSection = styled.section `
    padding: 120px 0;

    background-image: url(${bgOurTeam});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    h2, h3, p, span, ul, li {
        padding: 0;
        margin: 0;
    } 

    & > div {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    @media screen and (min-width: 768px) {
        gap: 40px;
    }
`

export const OurTeamTitle = styled.h2 `
    font-family: Prata;
    font-size: 34px;
    font-weight: 400;
    letter-spacing: 0.68px;

    text-align: center;

    @media screen and (min-width: 768px) {
        font-size: 48px;
        letter-spacing: 0.68px;
    }
`

export const OurTeamList = styled.ul `
    display: flex;
    flex-direction: column;
    gap: 60px;

    list-style-type: none;

    & > li {
        display: flex;
        flex-direction: column-reverse;
        gap: 24px;

        align-items: center;
        text-align: center;

        @media screen and (min-width: 1200px) {
            gap: 60px;
            flex-direction: row;
            text-align: left;

            & > li:nth-child(even) {
                flex-direction: row-reverse;
            }
        }
    }
`

export const OurTeamListItemTextContainer = styled.div `
    display: flex;
    flex-direction: column;
    gap: 24px;
`

export const OurTeamListItemTitle = styled.h3 `
    display: flex;
    flex-direction: column;

    font-family: Playfair Display;
    font-size: 24px;
    font-weight: 400;
    line-height: normal;

    @media screen and (min-width: 768px) {
        font-family: Prata;
        font-size: 48px;
        font-weight: 400;
        letter-spacing: 0.96px;
    }
`

export const OurTeamListItemText = styled.p `
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const OurTeamImg = styled.img `
    width: 300px;

    @media screen and (min-width: 400px) {
        width: 380px;
    }

    @media screen and (min-width: 1200px) {
        width: auto
    }
`