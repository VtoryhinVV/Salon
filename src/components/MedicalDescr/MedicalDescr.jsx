import { Container } from '../shared/Container';

import {
  MedicaSection,
  MedicaTextBox,
  MedicaTitle,
  MedicaText,
  MedicaPictBox,
  ImgLeftBox,
  ImgRightBox,
} from './MedicalDescr.styled';

export const MedicalDescr = () => {
  return (
    <MedicaSection>
      <Container>
        <MedicaTextBox>
          <MedicaTitle>Unlock Relief and Renewed Comfort</MedicaTitle>
          <MedicaText>
            Welcome to our Medical Botox Services, where we offer effective and
            personalized treatments for Hyperhidrosis, Teeth Grinding, and
            Headaches. Our dedicated team of medical professionals is committed
            to helping you find relief and regain control over your life.
            Discover how our specialized Botox treatments can make a meaningful
            difference.
          </MedicaText>
        </MedicaTextBox>
        <MedicaPictBox>
          <ImgLeftBox></ImgLeftBox>
          <ImgRightBox></ImgRightBox>
        </MedicaPictBox>
      </Container>
    </MedicaSection>
  );
};
