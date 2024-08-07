import { Container } from '../shared/Container';

import {
  MedicaSection,
  MedicaTextBox,
  MedicaTitle,
  MedicaText,
  MedicaPictBox,
  ImgLeftBox,
  ImgRightBox,
  AppoinmentBtn,
  AppoinmentBtnMob,
} from './MedicalDescr.styled';

export const MedicalDescr = () => {
  return (
    <MedicaSection>
      <Container>
        <MedicaTextBox
          data-aos="fade-right"
          data-aos-mirror="false"
          data-aos-once="true"
        >
          <MedicaTitle>Unlock Relief and Renewed Comfort</MedicaTitle>
          <MedicaText>
            Welcome to our Medical Botox Services, where we offer effective and
            personalized treatments for Hyperhidrosis, Teeth Grinding, and
            Headaches. Our dedicated team of medical professionals is committed
            to helping you find relief and regain control over your life.
            Discover how our specialized Botox treatments can make a meaningful
            difference.
          </MedicaText>
          <AppoinmentBtn
            href="https://bookings.gettimely.com/aesthetica7/book"
            target="_blank"
            rel="noreferrer"
          >
            Book appointment
          </AppoinmentBtn>
        </MedicaTextBox>
        <MedicaPictBox
          data-aos="fade-left"
          data-aos-mirror="false"
          data-aos-once="true"
        >
          <ImgLeftBox />
          <ImgRightBox />
        </MedicaPictBox>
        <AppoinmentBtnMob
          href="https://bookings.gettimely.com/aesthetica7/book"
          target="_blank"
          rel="noreferrer"
        >
          Book appointment
        </AppoinmentBtnMob>
      </Container>
    </MedicaSection>
  );
};
