import styled from '@emotion/styled';

export const AdvantagesSection = styled.section`
  padding-top: 60px;
  padding-bottom: 60px;

  ul,
  h2,
  h3,
  p,
  span {
    margin: 0;
    padding: 0;
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const AdvantagesTitle = styled.h2`
  font-family: Prata;
  font-size: 34px;
  font-weight: 400;
  letter-spacing: 0.68px;
  text-align: center;
  margin-bottom: 40px !important;

  @media screen and (min-width: 478px) {
    width: 380px;
  }
  @media screen and (min-width: 768px) {
    font-size: 45px;
    letter-spacing: 0.96px;
    width: auto;
    margin-bottom: 80px !important;
  }
  @media screen and (min-width: 1200px) {
    font-size: 48px;
  }
`;

export const AdvantagesList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 64px;

  list-style-type: none;

  @media screen and (min-width: 768px) {
    row-gap: 60px;
  }

  @media screen and (min-width: 1200px) {
    justify-content: none;
    row-gap: 80px;
    column-gap: 24px;
  }
`;

export const AdvantagesListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: center;
  position: relative;

  width: 300px;
  padding: 60px 40px 24px;
  box-sizing: border-box;

  box-shadow: var(--shadow);

  & > h3 {
    font-weight: 600;
  }

  & > svg {
    width: 80px;
    height: 80px;
    padding: 20px;
    box-sizing: border-box;

    background-color: var(--brown);
    fill: white;

    position: absolute;
    top: -40px;
    left: 50%;
    transform: translate(-50%);
  }

  @media screen and (min-width: 400px) {
    width: 380px;
    min-height: 250px;
  }

  @media screen and (min-width: 768px) {
    width: 45%;
  }

  @media screen and (min-width: 1200px) {
    width: 275px;
  }

  @media screen and (min-width: 1310px) {
    width: 304px;
    min-height: 304px;
  }
`;

export const AdvantagesLink = styled.a`
  padding: 12px 24px;
  width: 220px;
  text-align: center;
  border: none;
  text-decoration: none;

  background-color: var(--brown);
  color: white;

  transition: all 0.3s ease;

  &:hover,
  &:focus {
    background-color: var(--focus);
  }
  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }
`;
