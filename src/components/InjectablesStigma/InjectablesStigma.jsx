import { Container } from '../shared/Container';

import {
  InjectablesSection,
  InjectablesTextBox,
  InjectablesTitle,
  InjectablesText,
  InjectablesPictBox,
  ImgLeftBox,
  ImgRightBox,
  AppoinmentBtn,
} from './InjectablesStigma.styled';

export const InjectablesStigma = () => {
  return (
    <InjectablesSection>
      <Container>
        <InjectablesPictBox data-aos="fade-right">
          <ImgLeftBox></ImgLeftBox>
          <ImgRightBox></ImgRightBox>
        </InjectablesPictBox>
        <InjectablesTextBox data-aos="fade-left">
          <InjectablesTitle>Stigma doesn’t exist</InjectablesTitle>
          <InjectablesText>
            We understand that some men may have concerns about the stigma
            surrounding injectables or looking unnatural after the treatment.
            Rest assured, our team is highly trained and experienced in facial
            anatomy, ensuring that you receive a technique-sensitive treatment.
            This means that you can trust us to deliver subtle and natural
            results, so no one will be able to tell that you`ve had anything
            done.
          </InjectablesText>
          <InjectablesText>
            At Aesthetica clinic, we prioritize your comfort and satisfaction.
            Our knowledgeable team will guide you through the entire process,
            providing expert advice and ensuring a safe and pleasant experience.
            If you`re ready to enhance your appearance and boost your
            confidence, schedule a consultation with us today and discover the
            transformative effects of our injectable treatments.
          </InjectablesText>
          <AppoinmentBtn
            href="https://bookings.gettimely.com/aesthetica7/book"
            target="_blank"
            rel="noreferrer"
          >
            Book appoinment
          </AppoinmentBtn>
        </InjectablesTextBox>
      </Container>
    </InjectablesSection>
  );
};
