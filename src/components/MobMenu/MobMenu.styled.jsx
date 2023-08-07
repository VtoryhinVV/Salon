import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MobMenuBlock = styled.div`
  display: ${props => (props.open ? 'block' : 'none')};
  background-color: var(--white);
  padding: 24px 0 40px;
  position: absolute;

  z-index: 9999;
  width: 100%;
  & > div {
    padding: 0;
  }
  @media screen and (min-width: 480px) {
    width: 480px;
    left: 50%;
    transform: translate(-50%, 0);
  }
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

export const StyledLink = styled(NavLink)`
  color: var(--black);
  text-decoration: none;
  &:hover,
  &:focus {
    color: var(--brown);
  }
  &.active {
    color: var(--brown);
  }
`;

export const SocialsLink = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  & a {
    width: 24px;
    height: 24px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  & a > svg {
    width: 22px;
    height: 22px;
    fill: #9c7f47;
  }
`;

export const CloseBtn = styled.div`
  background: none;
  border: none;
  width: 24px;
  height: 24px;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  & > svg {
    width: 12px;
    height: 12px;
    stroke: var(--black);
  }
  &:hover {
    cursor: pointer;
  }
  &:hover > svg,
  &:focus > svg {
    stroke: var(--brown);
  }
`;
