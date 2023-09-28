import styled from '@emotion/styled';
import bg from '/src/assets/img/bgPricing.jpg';

export const PricingSect = styled.section`
  background: url(${bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  & > div {
    padding-top: 40px;
    padding-bottom: 60px;
  }
  & ul {
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
    & li {
      border-top: 1px solid var(--grey);
    }
    & li:last-child {
      border-bottom: 1px solid var(--grey);
    }
  }

  & h2 {
    margin: 0 0 24px;

    font-family: Prata;
    font-size: 34px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.96px;
    text-transform: capitalize;
    @media screen and (min-width: 768px) {
      font-size: 48px;
    }
  }

  & h3 {
    margin: 0 0 24px;
    font-family: Playfair Display;
    font-size: 32px;
    font-weight: 400;
    line-height: normal;
  }
`;

export const ConsultationItem = styled.div`
  margin-bottom: 60px;
  @media screen and (min-width: 768px) {
    margin-bottom: 100px;
  }
  & div {
    border-top: 1px solid var(--grey);
    border-bottom: 1px solid var(--grey);
  }
`;

export const PricingTwoInOne = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
  @media screen and (min-width: 768px) {
    margin-bottom: 100px;
    flex-direction: row;

    & > div {
      max-width: 567px;
    }
  }
`;

export const BotoxInfo = styled.div`
  margin-bottom: 60px;
  @media screen and (min-width: 768px) {
    border-right: 1px solid var(--grey);
    padding-right: 28px;
    margin-right: 28px;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1310px) {
    padding-right: 80px;
    margin-right: 80px;
  }
`;

export const HyalaseBox = styled.div`
  width: 100%;
  @media screen and (min-width: 1200px) {
    max-width: 50%;
  }
  margin-bottom: 60px;
  @media screen and (min-width: 768px) {
    margin-bottom: 100px;
  }
`;

export const HyalaseInfo = styled.div`
  @media screen and (min-width: 1200px) {
    & ul {
      border-right: 1px solid var(--grey);
      padding-right: 28px;
    }
  }

  @media screen and (min-width: 1310px) {
    & ul {
      border-right: 1px solid var(--grey);
      padding-right: 80px;
    }
  }
`;

export const AppoinmentBtn = styled.a`
  display: block;
  padding: 12px 24px;
  margin: 0 auto;
  text-decoration: none;
  width: 176px;
  text-align: center;
  cursor: pointer;
  background-color: var(--brown);
  color: white;
  text-transform: uppercase;
  transition: background-color 0.3s ease;

  &:hover,
  &:focus {
    background-color: var(--focus);
  }
`;
