import {
  StyledLink,
  HeaderNav,
  ImgLogo,
  Navigation,
  SocialsLink,
  Burger,
  Services,
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
        <Container overflowVisible>
          <Link to="/">
            <ImgLogo alt="Image" src={logo} />
          </Link>

          <Navigation>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/about_us">About Us</StyledLink>
            <Services>
              <StyledLink to="/services">
                Services
                <svg>
                  <use href={`${svgImgs}#icon-chevron-down`}></use>
                </svg>
              </StyledLink>
              <div>
                <StyledLink to="/dermal_filler">Dermal filler</StyledLink>
                <StyledLink to="/lip_filler">Lip Filler</StyledLink>
                <StyledLink to="/injectables_for_men">
                  Injectables for men
                </StyledLink>
                <StyledLink to="/anti_wrinkle">
                  Anti Wrinkle & Wrinkle preventative
                </StyledLink>
                <StyledLink to="/medical">Medical</StyledLink>
                <StyledLink to="/skin_rejuvenation_treatments">
                  Skin Rejuvenation Treatments
                </StyledLink>
              </div>
            </Services>

            <StyledLink to="/pricing">Pricing</StyledLink>
            <StyledLink to="/gallery">Gallery</StyledLink>
            <StyledLink to="/vouchers">Vouchers</StyledLink>
            <StyledLink to="/contact_us">Contact us</StyledLink>

            {/* Member */}
            <StyledLink to="/memberships">Memberships</StyledLink>
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
