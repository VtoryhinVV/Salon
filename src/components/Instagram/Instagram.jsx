import { Container } from '../shared/Container';
import {
  AppoinmentBtn,
  InstagramSection,
  InstagramTitle,
  InstaramBtn,
  SocialBtns,
} from './Instagram.styled';
import { SocialWidget } from './SocialWidget';

export function Instagram({ imgBg = false }) {
  return (
    <InstagramSection
      data-aos="fade-up"
      data-aos-mirror="false"
      data-aos-once="true"
      bg={imgBg}
    >
      <Container>
        <InstagramTitle>our instagram</InstagramTitle>
        <SocialWidget />
        <SocialBtns>
          <AppoinmentBtn
            href="https://bookings.gettimely.com/aesthetica7/book"
            target="_blank"
            rel="noreferrer"
          >
            Book appointment
          </AppoinmentBtn>
          <InstaramBtn
            href="https://www.instagram.com/aesthetica_by_anna/"
            target="_blank"
            rel="noreferrer"
          >
            VISIT OUR INSTAGRAM
          </InstaramBtn>
        </SocialBtns>
      </Container>
    </InstagramSection>
  );
}
