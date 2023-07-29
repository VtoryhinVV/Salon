import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import bgOurStory from "/img/bgOurStory.jpg";

export const SectionStory = styled.section`
  padding: 120px 0;
  background: url(${bgOurStory});
  & > div {
    display: flex;
    gap: 60px;
    align-items: center;
  }
`;
export const OurStoryContent = styled.div`
  width: 33%;

  & h2 {
    font-family: Prata;
    font-size: 48px;
    font-weight: 400;
    letter-spacing: 0.96px;
    text-transform: capitalize;
  }
  & p {
    margin-bottom: 40px;
  }
`;

export const OurStoryImg = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 30px;
  & img:nth-child(odd) {
    width: 100%;
    height: 474px;
  }
`;
export const OurStiryLink = styled.div`
  display: flex;
  & a:nth-child(2) {
    margin-right: 32px;
  }
`;

export const LinkTo = styled(Link)`
  padding: 10px 24px;
  background: var(--brown, #9c7f47);
  margin-right: auto;
  text-decoration: none;
  line-height: 20px;
  color: var(--white);
  text-transform: uppercase;
`;

export const SocLink = styled.a`
  width: 32px;
  height: 32px;

  & svg {
    fill: var(--brown);
    width: 100%;
    height: 100%;
  }
`;
