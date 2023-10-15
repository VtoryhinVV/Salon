import { Container } from '../shared/Container';
import { CustomBanner } from './CustomBanner';
import {
  AdresseInfo,
  Blur,
  Content,
  TextContant,
  MainTitle,
  Ellipse,
  HeroSection,
  StyledLink,
} from './Hero.styled';

import phone from '/img/phone-mobile.png';
import chatBubble from '/img/chat-bubble.png';
import globe from '/img/globe.png';

export const Hero = () => {
  return (
    <HeroSection>
      <Content
        data-aos="fade-down"
        data-aos-mirror="false"
        data-aos-once="true"
      >
        <CustomBanner />
        <Blur />
        <Ellipse />
        <TextContant>
          <Container>
            <AdresseInfo>
              <li>
                <img src={phone} width={24} height={24} alt="Phone image" />
                <p>+6421581907</p>
              </li>
              <li>
                <img
                  src={chatBubble}
                  width={24}
                  height={24}
                  alt="Chat bubble image"
                />
                <p>anna@aesthetica.co.nz</p>
              </li>
              <li>
                <img src={globe} width={24} height={24} alt="Planet image" />
                <p>
                  41 Raranga Street, Marshland, Christchurch 8083, New Zealand
                </p>
              </li>
            </AdresseInfo>
            <MainTitle>
              <h1>Unlock the world of confidence with Aesthetica clinic</h1>
              <p>Natural results, tailored treatment plans, boutique service</p>
              <StyledLink
                href="https://bookings.gettimely.com/aesthetica7/book"
                target="_blank"
                rel="noreferrer"
              >
                Book appoinment
              </StyledLink>
            </MainTitle>
          </Container>
        </TextContant>
      </Content>
    </HeroSection>
  );
};
