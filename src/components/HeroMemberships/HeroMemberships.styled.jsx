import styled from '@emotion/styled';
import bgHero from '/img/bg.jpg';

export const HeroSection = styled.section`
  background-image: url(${bgHero});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-top: 120px;
  padding-bottom: 120px;

  h1,
  p,
  button {
    margin: 0;
  }
  & > div {
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;

export const HeroTitle = styled.h1`
  font-family: Prata;
  font-size: 34px;
  letter-spacing: 0.68px;
  font-weight: 400;

  @media screen and (min-width: 768px) {
    font-size: 48px;
    letter-spacing: 0.96px;
  }
`;

export const HeroText = styled.div`
  font-weight: 400;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const HeroLink = styled.button`
  border: 1px solid var(--brown);
  background: var(--white, #fff);
  padding: 12px 24px;

  color: var(--brown);
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    border-color: var(--focus);
    color: var(--focus);
  }
`;
