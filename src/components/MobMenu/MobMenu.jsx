import {
  BoldLink,
  CloseBtn,
  MobMenuBlock,
  Navigation,
  Services,
  SocialsLink,
  StyledLink,
} from './MobMenu.styled';
import PropTypes from 'prop-types';

import svgImgs from '/symbol-defs.svg';
import { useEffect, useRef } from 'react';

export const MobMenu = ({ isOpen, toggleMenu }) => {
  const menuRef = useRef(null);

  const handleClickOutside = event => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      if (event.target.dataset.action == 'BtnMob') {
        return;
      }
      toggleMenu('Outside');
    }
  };

  const handleEscKeyPress = event => {
    if (event.key === 'Escape') {
      toggleMenu();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscKeyPress);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKeyPress);
    };
  }, [isOpen]);
  return (
    <MobMenuBlock open={isOpen} ref={menuRef}>
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
        <Services>
          <StyledLink onClick={toggleMenu} to="/services">
            Services
            <svg>
              <use href={`${svgImgs}#icon-chevron-down`}></use>
            </svg>
          </StyledLink>
          <BoldLink>
            <StyledLink onClick={toggleMenu} to="/services/dermal_filler">
              Dermal filler
            </StyledLink>
            <StyledLink onClick={toggleMenu} to="/services/lip_filler">
              Lip Filler
            </StyledLink>
            <StyledLink onClick={toggleMenu} to="/services/injectables_for_men">
              Injectables for men
            </StyledLink>
            <StyledLink onClick={toggleMenu} to="/services/anti_wrinkle">
              Anti Wrinkle & Wrinkle preventative
            </StyledLink>
            <StyledLink onClick={toggleMenu} to="/services/medical">
              Medical
            </StyledLink>
            <StyledLink
              onClick={toggleMenu}
              to="/services/skin_rejuvenation_treatments"
            >
              Skin Rejuvenation Treatments
            </StyledLink>
          </BoldLink>
        </Services>

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
