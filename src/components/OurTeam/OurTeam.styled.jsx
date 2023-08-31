import styled from '@emotion/styled';
import bgOurTeam from '/src/assets/img/bgOurTeam.jpg'

export const OurTeamSection = styled.section `
    padding: 120px 0;

    background-image: url(${bgOurTeam});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    h2, h3, p, span {
        padding: 0;
        margin: 0;
    } 
`

export const OurTeamTitle = styled.h2 `
    font-family: Prata;
    font-size: 48px;
    font-weight: 400;
    letter-spacing: 0.96px;

    text-align: center;
`

export const OurTeamList = styled.ul `
    display: flex;
    flex-direction: column;
    gap: 60px;

    list-style-type: none;

    & > li {
        display: flex;
        gap: 60px;

        align-items: center;
    }
    & > li:nth-child(even) {
        flex-direction: row-reverse;
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

    font-family: Prata;
    font-size: 48px;
    font-weight: 400;
    letter-spacing: 0.96px;
`

export const OurTeamListItemText = styled.p `
    display: flex;
    flex-direction: column;
    gap: 16px;
`

