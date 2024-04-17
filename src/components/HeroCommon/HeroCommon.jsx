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
  buttonText = 'Book appointment',
  service = false,
  many,
  linkForButton = '',
}) => {
  console.log('🚀 ~ file: HeroCommon.jsx:17 ~ linkForButton:', linkForButton);

  return (
    <HeroSection services={service}>
      <Container>
        <HeroTitle
          services={service}
          data-aos="fade-down"
          data-aos-mirror="false"
          data-aos-once="true"
        >
          {title}
        </HeroTitle>
        {many ? (
          <HeroText
            services={service}
            data-aos="fade-down"
            data-aos-mirror="false"
            data-aos-once="true"
          >
            {texts.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </HeroText>
        ) : (
          <HeroText
            services={service}
            data-aos="fade-down"
            data-aos-mirror="false"
            data-aos-once="true"
          >
            {texts}
          </HeroText>
        )}
        {service || (
          <HeroLink
            href={
              linkForButton || 'https://bookings.gettimely.com/aesthetica7/book'
            }
            target="_blank"
            rel="noreferrer"
            services={service}
            data-aos="fade-down"
            data-aos-mirror="false"
            data-aos-once="true"
          >
            {buttonText}
          </HeroLink>
        )}
      </Container>
    </HeroSection>
  );
};
