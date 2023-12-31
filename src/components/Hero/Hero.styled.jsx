import styled from '@emotion/styled';
import bgHero from '/img/bg.jpg';
import mobBgHero from '/img/mob/bghero.jpg';

export const HeroSection = styled.section`
  background-size: cover;
  background-position: center;
  width: 100%;

  & > div {
    @media screen and (min-width: 481px) {
      /* padding-bottom: 190px; */

      @media screen and (min-width: 768px) {
        padding-bottom: 0;
      }
    }
    @media (min-width: 768px) {
      & > div {
        padding-top: 0;
      }
    }
  }
`;

export const Content = styled.div`
  position: relative;
  max-width: 1676px;
  max-height: 928px;
  margin: 0 auto;
`;

export const Ellipse = styled.div`
  display: none;

  @media (min-width: 481px) {
    display: block;
    background-color: #9c7f47;

    border-radius: 605px/231.5px;
    filter: blur(113px);

    mix-blend-mode: multiply;
    opacity: 0.8;
    position: absolute;
    top: 30%;
    left: 15%;
    width: 70%;
    height: 40%;
    @media screen and (min-width: 900px) {
      left: 276px;
    }
  }
`;

export const Blur = styled.div`
  display: none;

  @media (min-width: 481px) {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 700px;
    z-index: 5;
    opacity: 0.800000011920929;
    background: var(--brown);
    mix-blend-mode: multiply;
  }
  @media screen and (min-width: 768px) {
    height: 500px;
  }
  @media screen and (min-width: 1000px) {
    height: 600px;
  }
  @media screen and (min-width: 1150px) {
    height: 700px;
  }

  @media screen and (min-width: 1250px) {
    height: 800px;
  }
  @media screen and (min-width: 1400px) {
    height: 928px;
  }
`;

export const TextContant = styled.div`
  color: var(--white);
  width: 100%;
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -15%);
  z-index: 50;
  & > div {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    margin-top: 32px;

    color: var(--white);

    & > div {
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const AdresseInfo = styled.ul`
  list-style: none;
  display: flex;
  gap: 16px;
  margin-top: 0;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin-bottom: 110px;
  & li {
    display: flex;
    gap: 8px;
    align-items: center;

    & p {
      margin: 0;
    }
    &:nth-of-type(3) p {
      max-width: 270px;
      text-align: center;
      @media screen and (min-width: 1200px) {
        max-width: 100%;
      }
    }
  }
  @media screen and (min-width: 768px) {
    gap: 24px;
    flex-direction: row;
    margin-bottom: 5%;
    padding: 0;
    & li {
      display: flex;
      gap: 8px;
      align-items: center;
      & p {
        margin: 0;
      }
    }
  }
  @media screen and (min-width: 850px) {
    margin-bottom: 10%;
  }
  @media screen and (min-width: 1000px) {
    margin-bottom: 5%;
  }

  @media screen and (min-width: 1150px) {
    margin-bottom: 15%;
  }
  @media screen and (min-width: 1400px) {
    margin-bottom: 20%;
  }
`;

export const MainTitle = styled.div`
  text-align: center;
  width: 90%;
  margin: 0 auto;
  & h1 {
    font-family: Prata;
    font-size: 34px;
    font-weight: 400;
    letter-spacing: 0.68px;
    text-transform: capitalize;

    margin: 0 auto;

    @media screen and (min-width: 1000px) {
      font-size: 60px;
      letter-spacing: 1.2px;
    }
  }

  & p {
    margin: 24px 0;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.32px;
    width: 85%;
    margin: 24px auto;
    @media screen and (min-width: 1000px) {
      font-weight: 700;
      width: 100%;
    }
  }
`;

export const StyledLink = styled.a`
  border: 1px solid var(--brown);
  background: var(--white, #fff);
  padding: 10px 24px;
  display: block;
  width: 221px;
  color: var(--brown);
  letter-spacing: 0.32px;
  text-transform: uppercase;
  margin: 0 auto;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    border-color: var(--focus);
    color: var(--focus);
  }
`;
