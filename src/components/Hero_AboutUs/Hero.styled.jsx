import styled from "@emotion/styled";
import bgHero from "/public/img/bg.jpg";
import salonPhoto from "/public/img/hero4.jpg";

export const HeroSection = styled.section `
    padding-top: 32px;
    padding-bottom: 32px;
    background-image: url(${bgHero});
`;

export const Container = styled.div `
    max-width: 1676px;
    max-height: 928px;
    margin: 0 auto;

    background-image: url(${salonPhoto});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;

export const List = styled.ul `
    list-style-type: none;
`;

