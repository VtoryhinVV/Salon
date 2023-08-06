import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

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

export const StyledLink = styled(NavLink)`
  color: var(--black);
  text-decoration: none;

  &.active {
    color: #9c7f47;
  }
`;

export const ImgLogo = styled.img`
  width: 120px;
  height: 60px;
`;

export const Navigation = styled.nav`
  display: none;
  @media screen and (min-width: 768px) {
    align-items: center;
    display: flex;

    gap: 32px;
  }
`;

export const SocialsLink = styled.div`
  display: flex;

  align-items: center;

  gap: 24px;
  & a > svg {
    width: 32px;
    height: 32px;
    fill: #9c7f47;
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
  & svg {
    width: 32px;
    height: 32px;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
