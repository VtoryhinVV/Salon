import styled from '@emotion/styled';
import bg from '/img/bgReviewes.jpg';

export const ReviewsSection = styled.section`
  background: url(${bg});
  background-size: cover;
  background-position: center;
  width: 100%;

  padding: 120px 0 100px;
  & .tutorial_link {
    display: none !important;
  }
  & .sk-below-button-container {
    padding: 0 !important;
  }

  & .sk-ww-google-reviews {
    background: transparent !important;
  }

  & .sk_reviews_grid {
    height: 600px !important;
    overflow-y: auto;
  }
  & .sk_reviews_grid-item:nth-of-type(n + 17) {
    position: absolute;
    white-space: nowrap;
    width: 1px;
    height: 1px;
    overflow: hidden;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    margin: -1px;
  }
`;

export const ReviewsTitle = styled.h2`
  color: var(--black);
  font-family: Prata;
  font-size: 34px;
  font-weight: 400;
  letter-spacing: 0.96px;
  text-transform: capitalize;
  margin: 0 0 40px;

  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`;
