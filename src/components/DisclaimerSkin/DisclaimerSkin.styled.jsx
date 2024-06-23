import styled from '@emotion/styled';

export const DisclaimerSect = styled.section`
  padding: 100px 0;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: 1200px) {
    padding: 120px 0;
    & > div {
      align-items: start;
    }
  }
`;
export const Title = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 24px;
`;

export const TitleSvg = styled.svg`
  width: 60px;
  height: 60px;
`;
export const TitleText = styled.h2`
  font-family: Prata;
  font-size: 34px;
  font-weight: 400;
  line-height: 65.04px;
  letter-spacing: 0.02em;
  text-align: left;
  margin: 0;
  @media screen and (min-width: 1200px) {
    font-size: 48px;
  }
`;

export const Content = styled.div`
  font-size: 14px;
  line-height: 1.6;
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: center;
  & p {
    margin: 0;
  }
  & a {
    color: var(--brown);
    text-decoration: none;
    &:hover,
    &:active {
      color: var(--focus);
    }
  }
  @media screen and (min-width: 1200px) {
    text-align: start;
  }
`;
