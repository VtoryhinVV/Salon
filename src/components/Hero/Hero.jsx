import { Container } from "../shared/Container";
import { CustomBanner } from "./CustomBanner";
import {
  AdresseInfo,
  Blur,
  Content,
  TextContant,
  MainTitle,
  Ellipse,
  HeroSection,
} from "./Hero.styled";

import phone from "/img/phone-mobile.png";
import chatBubble from "/img/chat-bubble.png";
import globe from "/img/globe.png";

export const Hero = () => {
  return (
    <HeroSection>
      <Content>
        <CustomBanner />
        <Blur />
        <Ellipse />
        <TextContant>
          <Container>
            <AdresseInfo>
              <li>
                <img src={phone} width={24} height={24} />
                <p>+6421581907</p>
              </li>
              <li>
                <img src={chatBubble} width={24} height={24} />
                <p>anna@aesthetica.co.nz</p>
              </li>
              <li>
                <img src={globe} width={24} height={24} />
                <p>
                  41 Raranga Street, Marshland, Christchurch 8083, New Zealand
                </p>
              </li>
            </AdresseInfo>
            <MainTitle>
              <h1>Unlock a World of Beauty and Style with Aesthetic clinic</h1>
              <p>
                Step into a world of pure bliss where beauty meets luxury, and
                let our skilled team of experts transform you from head to toe
              </p>
              <button>Book appoinment</button>
            </MainTitle>
          </Container>
        </TextContant>
      </Content>
    </HeroSection>
  );
};
