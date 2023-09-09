import {
  HeroSection,
  HeroTitle,
  HeroText,
  HeroLink,
} from './HeroCommon.styled';
import { Container } from '../shared/Container';

export const HeroCommon = ({
  title,
  text,
  buttonText = 'Book appoinment',
  service = false,
}) => {
  return (
    <HeroSection services={service}>
      <Container>
        <HeroTitle services={service}>{title}</HeroTitle>
        <HeroText services={service}>{text}</HeroText>
        <HeroLink
          href="https://bookings.gettimely.com/aesthetica7/book"
          target="_blank"
          rel="noreferrer"
          services={service}
        >
          {buttonText}
        </HeroLink>
      </Container>
    </HeroSection>
  );
};
