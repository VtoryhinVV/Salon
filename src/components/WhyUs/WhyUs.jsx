import CountUp from 'react-countup';
import {
  WhyUsSection,
  ImgContainer,
  TextContainer,
  WhyUsText,
  FlexText,
  StyledText,
} from './WhyUs.styled';
import { Container } from '../shared/Container';
import WhyUsDesktop1 from '/img/WhyUsDesktop1.jpg';
import WhyUsDesktop2 from '/img/WhyUsDesktop2.jpg';
import WhyUsDesktop3 from '/img/WhyUsDesktop3.jpg';
import WhyUsPhone1 from '/img/WhyUsPhone1.jpg';
import WhyUsPhone2 from '/img/WhyUsPhone2.jpg';
import WhyUsPhone3 from '/img/WhyUsPhone3.jpg';

export const WhyUs = () => {
  return (
    <WhyUsSection>
      <Container>
        <ImgContainer data-aos="fade-right">
          <picture>
            <source
              srcSet={WhyUsDesktop1}
              media="(min-width: 1200px)"
              width="250"
              height="474"
              alt=""
            />
            <img src={WhyUsPhone1} width="118" height="224" alt="" />
          </picture>
          <picture>
            <source
              srcSet={WhyUsDesktop2}
              media="(min-width: 1200px)"
              width="250"
              height="524"
              alt=""
            />
            <img src={WhyUsPhone2} width="118" height="247" alt="" />
          </picture>
          <picture>
            <source
              srcSet={WhyUsDesktop3}
              media="(min-width: 1200px)"
              width="250"
              height="474"
              alt=""
            />
            <img src={WhyUsPhone3} width="118" height="224" alt="" />
          </picture>
        </ImgContainer>
        <TextContainer data-aos="fade-left">
          <h2>Why us?</h2>
          <p>
            At Aesthetica Clinic, we deliver premium results using top-quality
            products. Our commitment to excellence empowers clients to achieve
            their aesthetic goals with confidence and satisfaction.
          </p>
          <div>
            <WhyUsText>
              <div>
                <StyledText>
                  <CountUp
                    end={5}
                    duration={5}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                  />
                  +
                </StyledText>
                <FlexText>
                  <span>Years of</span>
                  <span>experience</span>
                </FlexText>
              </div>
              <div>
                <StyledText>
                  <CountUp
                    end={100}
                    duration={2}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                  />
                  +
                </StyledText>
                <FlexText>
                  <span>Positive</span>
                  <span>Google</span>
                  <span>reviews</span>
                </FlexText>
              </div>
            </WhyUsText>
            <WhyUsText>
              <div>
                <StyledText>
                  <CountUp
                    end={3000}
                    duration={1}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                  />
                  +
                </StyledText>
                <FlexText>
                  <span>Happy</span>
                  <span>clients</span>
                </FlexText>
              </div>
            </WhyUsText>
          </div>
        </TextContainer>
      </Container>
    </WhyUsSection>
  );
};
