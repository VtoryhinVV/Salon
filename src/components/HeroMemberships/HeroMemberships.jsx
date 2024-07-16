import {
  HeroSection,
  HeroTitle,
  HeroText,
  HeroLink,
} from './HeroMemberships.styled';
import { Container } from '../shared/Container';

export const HeroMemberships = ({
  title,
  texts = '',
  buttonText,
  onScroll,
}) => {
  const handleClick = () => {
    if (onScroll) {
      onScroll();
    }
  };
  return (
    <HeroSection>
      <Container>
        <HeroTitle
          data-aos="fade-down"
          data-aos-mirror="false"
          data-aos-once="true"
        >
          {title}
        </HeroTitle>

        <HeroText
          data-aos="fade-down"
          data-aos-mirror="false"
          data-aos-once="true"
        >
          {texts}
        </HeroText>

        <HeroLink
          data-aos="fade-down"
          data-aos-mirror="false"
          data-aos-once="true"
          onClick={handleClick}
        >
          {buttonText}
        </HeroLink>
      </Container>
    </HeroSection>
  );
};
