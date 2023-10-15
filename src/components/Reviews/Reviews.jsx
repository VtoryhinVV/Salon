import { GoogleReviews } from '../GoogleReviews/GoogleReviews';
import { Container } from '../shared/Container';
import { ReviewsSection, ReviewsTitle } from './Reviews.styled';

export function Reviews() {
  return (
    <ReviewsSection
      data-aos="fade-up"
      data-aos-mirror="false"
      data-aos-once="true"
    >
      <Container>
        <ReviewsTitle>What our clients say</ReviewsTitle>
        <GoogleReviews />
      </Container>
    </ReviewsSection>
  );
}
