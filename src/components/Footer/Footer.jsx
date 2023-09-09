import logo from "/src/assets/img/LogoFooter.png";
import svgImgs from '/symbol-defs.svg';
import {
  FooterSection,
  FooterContainer,
  FooterList,
  StyledLink,
  SocialsLink
} from './Footer.styled';
import { Container } from '../shared/Container';

export const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <FooterContainer>
          <img src={logo} alt="logo" width={240} height={120} />
          <nav>
            <FooterList>
              <li>
                <div>
                  <StyledLink to="/">Home</StyledLink>
                </div>
                <div>
                  <StyledLink to="/about_us">About Us</StyledLink>
                </div>
              </li>
              <li>
                <div>
                  <StyledLink to="/services">Services</StyledLink>
                </div>
                <div>
                  <StyledLink to="/pricing">Pricing</StyledLink>
                </div>
              </li>
              <li>
                <div>
                  <StyledLink to="/gallery">Gallery</StyledLink>
                </div>
                <div>
                  <StyledLink to="/vouchers">Vouchers</StyledLink>
                </div>
              </li>
              <li>
                <div>
                  <StyledLink to="/contact_us">Contact</StyledLink>
                </div>
              </li>
            </FooterList>
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
          </nav>
        </FooterContainer>
      </Container>
    </FooterSection>
  );
};
