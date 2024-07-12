import styled from '@emotion/styled';

export const HowItWorksSection = styled.section`
  padding-top: 120px;
  padding-bottom: 120px;

  h2,
  p,
  span {
    margin: 0;
    padding: 0;
  }

  & > div {
    display: flex;
    flex-direction: column-reverse;
    gap: 60px;
    align-items: center;
    text-align: center;

    @media screen and (min-width: 768px) {
      flex-direction: row;
      text-align: left;
    }
  }
`;

export const HowItWorksInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  & > h2 {
    font-family: Prata;
    font-size: 34px;
    letter-spacing: 0.68px;
    font-weight: 400;

    @media screen and (min-width: 1200px) {
      font-size: 48px;
      letter-spacing: 0.96px;
    }
  }

  & > a {
    margin: 16px auto 0;
    padding: 12px 24px;
    width: 235px;
    box-sizing: border-box;

    text-decoration: none;

    background-color: var(--brown);
    color: white;

    transition: all 0.3s ease;

    &:hover,
    &:focus {
      background-color: var(--focus);
    }

    @media screen and (min-width: 768px) {
      margin: 16px 0 0;
    }
  }
`;

export const HowItWorksTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const HowItWorksImgContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 18px;
  @media screen and (min-width: 1200px) {
    gap: 30px;
  }
`;
