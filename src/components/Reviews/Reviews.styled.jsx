import styled from '@emotion/styled';
import bg from '/img/bgReviewes.jpg';

export const ReviewsSection = styled.section`
  background: url(${bg});
  background-size: cover;
  background-position: center;
  width: 100%;

  padding: 120px 0;

  & .sk-ww-google-reviews {
    background: none !important;
  }

  & .sk_reviews_grid-content {
    display: flex;
    align-items: center;
  }

  & .sk_reviews_num_icon {
    font-size: 42px;
    font-family: Plus Jakarta Sans;
    font-style: normal;
    font-weight: 400;
    line-height: 48px;
  }

  & .sk-badge-name {
    color: var(--white, #fff);
    text-align: center;
    font-family: Plus Jakarta Sans;
    font-size: 24px;
    font-style: normal;

    @media screen and (min-width: 768px) and (max-width: 1200px) {
      font-size: 16px;
    }
  }

  & .sk_google_review_count {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
  }
`;

export const ReviewsTitle = styled.h2`
  color: var(--black);
  font-family: Prata;
  font-size: 34px;
  font-weight: 400;
  letter-spacing: 0.96px;
  text-transform: capitalize;

  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`;
