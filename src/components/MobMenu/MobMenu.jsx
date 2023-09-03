import {
  CloseBtn,
  MobMenuBlock,
  Navigation,
  SocialsLink,
  StyledLink,
} from './MobMenu.styled';
import PropTypes from 'prop-types';

import svgImgs from '/symbol-defs.svg';

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
        <StyledLink to="/about_us">About Us</StyledLink>
        <StyledLink to="/services">Services</StyledLink>
        <StyledLink to="/pricing">Pricing</StyledLink>
        <StyledLink to="/vouchers">Vouchers</StyledLink>
        <StyledLink to="/contact_us">Contact us</StyledLink>
        <SocialsLink>
          <a
            href="https://m.facebook.com/Aestheticabyanna/"
            rel="noreferrer"
            target="_blank"
          >
            <svg>
              <use href={`${svgImgs}#icon-facebook`}></use>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/aesthetica_by_anna/"
            target="_blank"
            rel="noreferrer"
          >
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
