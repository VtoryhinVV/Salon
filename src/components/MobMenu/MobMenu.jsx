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
        <StyledLink onClick={toggleMenu} to="/">
          Home
        </StyledLink>
        <StyledLink onClick={toggleMenu} to="/about_us">
          About Us
        </StyledLink>
        <StyledLink onClick={toggleMenu} to="/services">
          Services
        </StyledLink>
        <StyledLink onClick={toggleMenu} to="/pricing">
          Pricing
        </StyledLink>
        <StyledLink onClick={toggleMenu} to="/gallery">
          Gallery
        </StyledLink>
        <StyledLink onClick={toggleMenu} to="/vouchers">
          Vouchers
        </StyledLink>
        <StyledLink onClick={toggleMenu} to="/contact_us">
          Contact us
        </StyledLink>
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
