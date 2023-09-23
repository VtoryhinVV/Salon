import styled from '@emotion/styled';

export const DiscoverSection = styled.section`
  padding: 120px 0;

  h1,
  h2,
  p,
  span {
    margin: 0;
    padding: 0;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 60px;

    align-items: center;

    @media screen and (min-width: 1200px) {
      flex-direction: row;
    }
  }
`;

export const DiscoverImgContainer = styled.div`
  display: none;

  & img {
    width: 180px;

    @media screen and (min-width: 768px) {
      width: 310px;
    }
  }

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

export const DiscoverTextContainer = styled.div`
  text-align: center;
  align-items: center;

  display: flex;
  flex-direction: column;
  gap: 24px;

  & > p {
    @media screen and (min-width: 768px) {
      width: 580px;
    }
  }

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

export const DiscoverTitle = styled.h2`
  display: flex;
  flex-direction: column;

  font-family: Prata, serif;
  font-size: 34px;
  letter-spacing: 0.88px;
  font-weight: 400;
  line-height: 65px;

  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`;