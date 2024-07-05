import styled from '@emotion/styled';
import bgProfhilo from '/src/assets/img/bgProfhilo.jpg';
import SvgIcon from '/src/assets/svg/check-circle.svg';
export const ProfhiloSect = styled.section`
  padding: 100px 0;
  background-image: url(${bgProfhilo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (min-width: 768px) {
    padding: 120px 0;
  }
`;

export const WhatIsProfhilo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  margin-bottom: 60px;
  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
  & img {
    display: none;
    @media screen and (min-width: 420px) {
      display: block;
    }
  }
`;
export const WhatIsProfhiloInfo = styled.div`
  text-align: center;

  @media screen and (min-width: 1200px) {
    text-align: start;
  }
  & h2 {
    margin: 0 0 24px;

    font-family: Prata;
    font-size: 34px;
    font-weight: 400;
    @media screen and (min-width: 768px) {
      font-size: 48px;
    }
  }
  & p {
    margin: 0;
  }
  & div {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;

export const IdealCandidates = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  gap: 60px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const IdealCandidatesVisual = styled.div`
  display: flex;
  gap: 24px;
  align-items: end;
  & img {
    display: none;
    @media screen and (min-width: 1200px) {
      display: block;
    }
  }
`;

export const IdealCandidatesInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  & p,
  ul,
  li {
    margin: 0;
  }

  & h2 {
    font-family: Prata;
    font-size: 34px;
    font-weight: 400;
    text-align: center;
    margin: 0;
    @media screen and (min-width: 1200px) {
      font-size: 48px;
      text-align: start;
    }
  }

  & ul {
    list-style: none;
    padding-left: 1em;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  & ul li {
    position: relative;
    padding-left: 1.5em;
  }

  & ul li::before {
    content: '';
    position: absolute;
    left: -8px;
    top: -0.1em; /* Adjust to vertically center the bullet */
    width: 24px; /* Width of the SVG */
    height: 24px; /* Height of the SVG */
    background-image: url(${SvgIcon});
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

export const VideoCont = styled.div`
  display: none;
  @media screen and (min-width: 310px) {
    display: block;
    width: 300px !important;
    height: 530px !important;
  }

  @media screen and (min-width: 410px) {
    width: 320px !important;
    height: 570px !important;
  }

  @media screen and (min-width: 1200px) {
    width: 344px !important;
    height: 615px !important;
  }

  position: relative;
  overflow: hidden;
  & iframe {
    position: absolute;
    top: 0;
    left: 0;
  }
`;
