import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const FooterSection = styled.footer`
  padding: 60px 0;
  border-top: 1px solid var(--brown-light);

  li, h2, p, a {
    margin: 0;
    padding: 0;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
  }

  & > nav {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;

    @media screen and (min-width: 768px) {
      flex-direction: row;
    }

    @media screen and (min-width: 1200px) {
      gap: 120px;
    }
  }
`

export const FooterList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  margin: 0;
  padding: 0;

  text-align: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
    text-align: left;
    align-items: start;
  }
  @media screen and (min-width: 1200px) {
    gap: 120px;
    width: 100%;
  }

  li {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;

export const StyledLink = styled(Link)`
  color: var(--black);
  text-decoration: none;
  font-size: 14px;

  transition: all 0.3s ease;

  &:hover,
  &:focus {
    color: var(--focus);
  }
`;

export const SocialsLink = styled.div `
  align-items: center;
  display: flex;
  gap: 16px;
  
  & > a {
    width: 32px;
    height: 32px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  & a > svg {
    width: 24px;
    height: 24px;
    fill: #9c7f47;

    transition: all 0.3s ease;
  }

  & a > svg:hover,
  & a > svg:focus {
    fill: var(--focus);
  }
`
