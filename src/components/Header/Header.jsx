import {
  StyledLink,
  HeaderNav,
  ImgLogo,
  Navigation,
  SocialsLink,
} from "./Header.styled";

import logo from "../../assets/img/LogoHeader.png";

import { Container } from "../shared/Container";

export const Header = () => {
  return (
    <HeaderNav>
      <Container>
        <ImgLogo alt="Image" src={logo} />
        <Navigation>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/about_us">About Us</StyledLink>
          <StyledLink to="/products">Services</StyledLink>
          <StyledLink to="/contact_us">Pricing</StyledLink>
          <StyledLink to="/a">Pre and Post Care</StyledLink>
          <StyledLink to="/a">Gift Cards</StyledLink>
          <StyledLink to="/a">Contact us</StyledLink>
          <StyledLink to="/a">Disclaimer</StyledLink>
        </Navigation>
        <SocialsLink>
          <a href="#">
            <svg>
              <use href="/symbol-defs.svg#icon-facebook"></use>
            </svg>
          </a>
          <a href="#">
            <svg>
              <use href="/symbol-defs.svg#icon-instagram"></use>
            </svg>
          </a>
        </SocialsLink>
      </Container>
    </HeaderNav>
  );
};
