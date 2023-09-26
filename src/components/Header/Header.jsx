import {
  StyledLink,
  HeaderNav,
  ImgLogo,
  Navigation,
  SocialsLink,
  Burger,
} from './Header.styled';

import logo from '../../assets/img/LogoHeader.png';
import svgImgs from '/symbol-defs.svg';
import { Container } from '../shared/Container';
import { MobMenu } from '../MobMenu/MobMenu';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isMobMenuOpen, setIsMobMenuOpen] = useState(false);

  const toggleMobMenu = () => {
    setIsMobMenuOpen(!isMobMenuOpen);
  };

  return (
    <>
      <HeaderNav>
        <Container>
          <Link to="/">
            <ImgLogo alt="Image" src={logo} />
          </Link>

          <Navigation>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/about_us">About Us</StyledLink>
            <StyledLink to="/services">Services</StyledLink>
            <StyledLink to="/pricing">Pricing</StyledLink>
            <StyledLink to="/gallery">Gallery</StyledLink>
            <StyledLink to="/vouchers">Vouchers</StyledLink>
            <StyledLink to="/contact_us">Contact us</StyledLink>
          </Navigation>
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
            <Burger
              type="button"
              aria-label="Mobile menu"
              onClick={toggleMobMenu}
              data-action="BtnMob"
              // disabled={isMobMenuOpen && 'true '}
            >
              <svg data-action="BtnMob">
                <use href={`${svgImgs}#icon-burger`}></use>
              </svg>
            </Burger>
            <MobMenu isOpen={isMobMenuOpen} toggleMenu={toggleMobMenu} />
          </SocialsLink>
        </Container>
      </HeaderNav>
    </>
  );
};
