import styled from '@emotion/styled';

export const SkinRejAboutSect = styled.section`
  padding: 100px 0;
  text-align: center;
  @media screen and (min-width: 768px) {
    text-align: start;
  }
  p,
  span {
    margin: 0;
    padding: 0;
  }

  ul,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 60px;
    flex-direction: column;
    @media screen and (min-width: 768px) {
      flex-direction: row;
    }
  }
  @media screen and (min-width: 768px) {
    padding: 120px 0;
  }
`;
export const SkinRejAboutInfo = styled.div`
  & h2 {
    font-family: Prata;
    font-size: 34px;
    text-transform: capitalize;
    font-weight: 400;
    margin-top: 0;
    margin-bottom: 40px;
    @media screen and (min-width: 1280px) {
      font-size: 48px;
    }
  }

  & ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;
export const VideoCont = styled.div`
  & video {
    display: none;
    @media screen and (min-width: 310px) {
      display: block;
      width: 300px;
      height: 530px;
    }

    @media screen and (min-width: 410px) {
      width: 389px;
      height: 690px;
    }

    @media screen and (min-width: 1280px) {
      width: 448px;
      height: 805px;
    }
  }
`;
