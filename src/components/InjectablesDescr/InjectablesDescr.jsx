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
} from './InjectablesDescr.styled';

export const InjectablesDescr = () => {
  return (
    <InjectablesSection>
      <Container>
        <InjectablesTextBox>
          <InjectablesTitle>Youth is for everyone</InjectablesTitle>
          <InjectablesText>
            Botox is a popular choice among our male clients for reducing the
            appearance of fine lines and wrinkles. Common areas of treatment
            include crow's feet (lines around the eyes), frown lines between the
            eyebrows (11's), and horizontal forehead lines. Our skilled
            professionals will carefully administer the injections to achieve
            optimal results while maintaining a natural appearance.
          </InjectablesText>
          <InjectablesText>
            We also offer dermal filler treatments for men, which can help
            create more defined and masculine facial features. Areas commonly
            treated include the jawline and chin, but we can also address other
            areas such as cheeks, lips, nasolabial folds, and under eyes. Our
            team will work closely with you to understand your goals and tailor
            the treatment to achieve your desired results.
          </InjectablesText>
          <AppoinmentBtn
            href="https://bookings.gettimely.com/aesthetica7/book"
            target="_blank"
            rel="noreferrer"
          >
            Book appoinment
          </AppoinmentBtn>
        </InjectablesTextBox>
        <InjectablesPictBox>
          <ImgLeftBox></ImgLeftBox>
          <ImgRightBox></ImgRightBox>
        </InjectablesPictBox>
      </Container>
    </InjectablesSection>
  );
};
