import logo from "../../assets/img/LogoHeader.png";
import { FooterSection, FooterContainer, FooterList, StyledLink } from "./Footer.styled";
import { Container } from "../shared/Container";

export const Footer = () => {
    return <FooterSection>
        <Container>
            <FooterContainer>
                <img src={logo} alt="logo" width={240} height={120}/>
                <nav>
                    <FooterList>
                        <div>
                            <li><StyledLink to="/">Home</StyledLink></li>
                            <li><StyledLink to="/products">Services</StyledLink></li>
                            <li><StyledLink to="/about_us">About Us</StyledLink></li>
                        </div>
                        <div>
                            <li><StyledLink to="/contact_us">Pricing</StyledLink></li>
                            <li><StyledLink to="/a">Booking</StyledLink></li>
                            <li><StyledLink to="/a">Pre and Post Care</StyledLink></li>
                        </div>
                        <div>
                            <li><StyledLink to="/a">Patient Portal Page</StyledLink></li>
                            <li><StyledLink to="/a">Injectables for Men</StyledLink></li>
                            <li><StyledLink to="/a">Gift Cards</StyledLink></li>
                        </div>
                        <div>
                            <li><StyledLink to="/a">Contact</StyledLink></li>
                            <li><StyledLink to="/a">Disclaimer</StyledLink></li>
                        </div>
                    </FooterList>
                </nav>
            </FooterContainer>
        </Container>
    </FooterSection>
} 