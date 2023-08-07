import {
  CloseBtn,
  MobMenuBlock,
  Navigation,
  SocialsLink,
  StyledLink,
} from './MobMenu.styled';
import PropTypes from 'prop-types';

import svgImgs from '/symbol-defs.svg';
import { Container } from '../shared/Container';

export const MobMenu = ({ isOpen, toggleMenu }) => {
  return (
    <MobMenuBlock open={isOpen}>
      <CloseBtn onClick={toggleMenu}>
        <svg>
          <use href={`${svgImgs}#icon-close`}></use>
        </svg>
      </CloseBtn>

      <Navigation>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about_us">Services</StyledLink>
        <StyledLink to="/about_us">About Us</StyledLink>
        <StyledLink to="/contact_us">Pricing</StyledLink>
        <StyledLink to="/a">Booking</StyledLink>
        <StyledLink to="/a">Pre and Post Care</StyledLink>
        <StyledLink to="/a">Patient Portal Page</StyledLink>
        <StyledLink to="/a">Injectables for Men</StyledLink>
        <StyledLink to="/a">Gift Cards</StyledLink>
        <StyledLink to="/a">Contact</StyledLink>
        <StyledLink to="/a">Disclaimer</StyledLink>
        <SocialsLink>
          <a href="#">
            <svg>
              <use href={`${svgImgs}#icon-facebook`}></use>
            </svg>
          </a>
          <a href="#">
            <svg>
              <use href={`${svgImgs}#icon-instagram`}></use>
            </svg>
          </a>
        </SocialsLink>
      </Navigation>
    </MobMenuBlock>
  );
};

MobMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};
