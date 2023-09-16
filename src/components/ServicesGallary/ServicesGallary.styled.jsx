import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

import imgBg from '/src/assets/img/bgServGallery.jpg';

export const ServicesGallarySection = styled.section`
  padding: 120px 0;
  background: ${props => (props.bgImg ? `url(${imgBg})` : 'none')};
`;

export const ServicesGallaryTitle = styled.h2`
  margin: 0 0 40px;

  font-family: Prata;
  font-size: 34px;

  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.96px;
  text-transform: capitalize;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`;

export const BtnGroup = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 24px;
  align-items: center;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    justify-content: center;
    flex-direction: row;
  }
  @media screen and (min-width: 1200px) {
    margin-top: 40px;
  }
`;

export const AppoinmentBtn = styled.a`
  display: block;
  padding: 12px 24px;
  text-decoration: none;
  width: 176px;
  text-align: center;
  cursor: pointer;
  background-color: var(--brown);
  color: white;
  text-transform: uppercase;
  transition: background-color 0.3s ease;

  &:hover,
  &:focus {
    background-color: var(--focus);
  }
`;

export const ToGallery = styled(NavLink)`
  border: 1px solid var(--Brown, #9c7f47);
  display: block;
  width: 179px;
  background: var(--white, #fff);
  text-decoration: none;
  padding: 10px 24px;
  color: var(--brown);
  text-align: center;

  text-transform: uppercase;
  &:hover,
  &:focus {
    border-color: var(--focus);
    color: var(--focus);
  }
`;
