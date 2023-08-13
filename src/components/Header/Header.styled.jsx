import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderNav = styled.header`
  align-items: center;
  background-color: var(--white);
  border-bottom: 1px solid #bdbdbd;
  padding: 16px 0;

  & > div {
    display: flex;
    justify-content: space-between;
  }
`;

export const ImgLogo = styled.img`
  width: 120px;
  height: 60px;
`;

export const Navigation = styled.nav`
  display: none;
  @media screen and (min-width: 1200px) {
    align-items: center;
    display: flex;

    gap: 32px;
  }
`;

export const StyledLink = styled(NavLink)`
  color: var(--black);
  text-decoration: none;

  transition: all 0.3s ease;

  &:hover,
  &:focus {
    color: var(--brown);
  }
  &.active {
    color: #9c7f47;
  }
`;
export const SocialsLink = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  & a {
    width: 32px;
    height: 32px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  & a > svg {
    width: 26px;
    height: 26px;
    fill: #9c7f47;

    transition: all 0.3s ease;
  }

  & a > svg:hover,
  & a > svg:focus {
    fill: var(--focus);
  }

  @media screen and (min-width: 768px) {
    gap: 16px;
    & svg {
      width: 24px;
      height: 24px;
      fill: #9c7f47;
    }
  }
`;

export const Burger = styled.button`
  background: none;
  border: none;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  stroke: var(--black);
  &:hover > svg,
  &:focus > svg {
    stroke: var(--brown);
  }
  & svg {
    width: 32px;
    height: 14px;
  }

  @media screen and (min-width: 1200px) {
    display: none;
  }
`;
