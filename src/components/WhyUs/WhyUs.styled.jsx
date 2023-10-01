import styled from '@emotion/styled';

export const WhyUsSection = styled.section`
  padding-top: 60px;
  padding-bottom: 60px;

  h1,
  h2,
  p,
  span {
    margin: 0;
    padding: 0;
  }

  & > div {
    display: flex;
    flex-direction: column-reverse;
    gap: 30px;
    align-items: center;
    text-align: center;

    @media screen and (min-width: 768px) {
      flex-direction: row;
      text-align: left;
    }
  }
`;

export const ImgContainer = styled.div`
  display: none;

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
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  vertical-align: middle;

  color: var(--black);

  @media screen and (min-width: 1200px) {
    width: 33%;
  }

  & > h2 {
    font-family: Prata;
    font-size: 34px;
    font-weight: 400;

    @media screen and (min-width: 1200px) {
      font-size: 48px;
    }
  }
  & > div {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;

export const WhyUsText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin: 0;
  }

  & > div {
    display: flex;
    gap: 9px;
    width: 162px;
    text-align: left;
    align-items: center;

    @media screen and (min-width: 768px) {
      width: 202px;
    }
  }
`;

export const FlexText = styled.p`
  display: flex;
  flex-direction: column;
`;

export const StyledText = styled.span`
  font-family: Prata;
  font-size: 40px;
`;
