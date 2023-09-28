import styled from '@emotion/styled';
import bgImg from '../../assets/img/bgGift.jpg';

export const BuyGiftSection = styled.section`
  padding-top: 60px;
  padding-bottom: 60px;

  h1,
  h2,
  p,
  span {
    margin: 0;
    padding: 0;
  }

  background-image: ${props => (props.bg ? `url(${bgImg})` : 'none')};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  & > div {
    display: flex;
    flex-direction: column;
    gap: 60px;

    align-items: center;

    @media screen and (min-width: 768px) {
      flex-direction: row;
    }
  }
`;

export const BuyGiftImgContainer = styled.div`
  display: none;
  & picture {
    display: flex;
  }
  @media screen and (min-width: 350px) {
    display: flex;
    align-items: flex-end;
    gap: 0px;
  }
  @media screen and (min-width: 360px) {
    gap: 5px;
  }
  @media screen and (min-width: 380px) {
    gap: 10px;
  }
  @media screen and (min-width: 480px) {
    gap: 16px;
  }
  @media screen and (min-width: 1200px) {
    display: flex;
    align-items: flex-end;
    gap: 30px;
    & picture:nth-of-type(odd) {
      width: 100%;
      height: 474px;
    }
  }
`;

export const BuyGiftTextContainer = styled.div`
  text-align: center;
  align-items: center;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const BuyGiftTitle = styled.h2`
  display: flex;
  flex-direction: column;

  font-family: Prata, serif;
  font-size: 32px;
  letter-spacing: 0.64px;
  font-weight: 400;
`;

export const BuyGiftButton = styled.a`
  padding: 12px 24px;
  margin-top: 24px;

  width: 217px;

  border: 1px solid var(--brown);
  color: var(--brown);

  text-decoration: none;

  transition: all 0.3s ease;

  &:hover,
  &:focus {
    border-color: var(--focus);
    color: var(--focus);
  }
`;
