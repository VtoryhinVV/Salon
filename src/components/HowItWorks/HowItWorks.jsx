import { Container } from '../shared/Container';
import {
  HowItWorksSection,
  HowItWorksInfoContainer,
  HowItWorksTextContainer,
  HowItWorksImgContainer,
} from './HowItWorks.styled';

import membershipsHow1 from '/src/assets/img/membershipsHow1.jpg';
import membershipsHow1Mob from '/src/assets/img/membershipsHow1Mob.jpg';
import membershipsHow2 from '/src/assets/img/membershipsHow2.jpg';
import membershipsHow2Mob from '/src/assets/img/membershipsHow2Mob.jpg';
export const HowItWorks = () => {
  return (
    <HowItWorksSection>
      <Container>
        <HowItWorksInfoContainer
          data-aos="fade-right"
          data-aos-mirror="false"
          data-aos-once="true"
        >
          <h2>How It Works</h2>
          <HowItWorksTextContainer>
            <span>
              Transform your look with our exclusive anti-wrinkle treatment
              memberships at Aetshtica clinic, designed for those seeking
              optimum results. Similar to a gym membership, our memberships
              offer a convenient and cost-effective way to maintain your
              youthful appearance.
            </span>
            <span>
              Select the number of treatment areas you desire, set up weekly
              payments aligned with your chosen membership, and receive an
              anti-wrinkle treatment every 12 weeks. Embrace the simplicity of
              effortlessly maintaining your youthful appearance.
            </span>
          </HowItWorksTextContainer>
          <a
            href="https://bookings.gettimely.com/aesthetica7/book"
            target="_blank"
            rel="noreferrer"
          >
            BOOK APPOINTMENT
          </a>
        </HowItWorksInfoContainer>
        <HowItWorksImgContainer
          data-aos="fade-left"
          data-aos-mirror="false"
          data-aos-once="true"
        >
          <picture
            data-aos="fade-left"
            data-aos-mirror="false"
            data-aos-once="true"
          >
            <source
              srcSet={membershipsHow1}
              media="(min-width: 1200px)"
              width="324"
              height="615"
              alt=""
            />

            <img src={membershipsHow1Mob} width="181" height="351" alt="" />
          </picture>
          <picture
            data-aos="fade-left"
            data-aos-mirror="false"
            data-aos-once="true"
          >
            <source
              srcSet={membershipsHow2}
              media="(min-width: 1200px)"
              width="324"
              height="665"
              alt=""
            />

            <img src={membershipsHow2Mob} width="181" height="380" alt="" />
          </picture>
        </HowItWorksImgContainer>
      </Container>
    </HowItWorksSection>
  );
};
