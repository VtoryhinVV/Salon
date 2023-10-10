import {
  HeroSection,
  HeroTitle,
  HeroText,
  HeroLink,
} from './HeroCommon.styled';
import { Container } from '../shared/Container';

export const HeroCommon = ({
  title,
  texts,
  buttonText = 'Book appoinment',
  service = false,
  many,
}) => {
  return (
    <HeroSection services={service}>
      <Container>
        <HeroTitle services={service} data-aos="fade-down">
          {title}
        </HeroTitle>
        {many ? (
          <HeroText services={service} data-aos="fade-down">
            {texts.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </HeroText>
        ) : (
          <HeroText services={service} data-aos="fade-down">
            {texts}
          </HeroText>
        )}
        {service || (
          <HeroLink
            href="https://bookings.gettimely.com/aesthetica7/book"
            target="_blank"
            rel="noreferrer"
            services={service}
            data-aos="fade-down"
          >
            {buttonText}
          </HeroLink>
        )}
      </Container>
    </HeroSection>
  );
};
