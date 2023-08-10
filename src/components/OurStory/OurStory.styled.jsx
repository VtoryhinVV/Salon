import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import bgOurStory from '/img/bgOurStory.jpg';

export const SectionStory = styled.section`
  padding: 100px 0;
  background: url(${bgOurStory});

  & > div {
    display: flex;
    flex-direction: column;
    gap: 60px;
    align-items: center;
    text-align: center;

    @media screen and (min-width: 768px) {
      flex-direction: row;
      text-align: start;
    }
  }

  @media screen and (min-width: 1200px) {
    padding: 120px 0;
  }
`;
export const OurStoryContent = styled.div`
  & h2 {
    font-family: Prata;
    font-size: 34px;
    font-weight: 400;
    letter-spacing: 0.68px;
    text-transform: capitalize;

    margin: 0;
  }
  display: flex;
  flex-direction: column;
  gap: 24px;
  & p {
    margin: 0;
  }
  @media screen and (min-width: 1200px) {
    width: 33%;

    & h2 {
      font-size: 48px;
      letter-spacing: 0.96px;
    }
    & p {
      margin-bottom: 40px;
    }
  }
`;

export const OurStiryLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    & a:nth-of-type(2) {
      margin-right: 32px;
    }
  }
`;

export const LinkTo = styled(Link)`
  padding: 10px 24px;
  background: var(--brown, #9c7f47);

  text-decoration: none;
  line-height: 20px;
  color: var(--white);
  text-transform: uppercase;

  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-right: auto;
    margin-bottom: 0;
  }
`;

export const SocLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

export const SocLink = styled.a`
  width: 48px;
  height: 48px;

  & svg {
    fill: var(--brown);
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

export const OurStoryImg = styled.div`
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
    & picture:nth-of-type(odd) {
      width: 100%;
      height: 474px;
    }
  }
`;
