import styled from '@emotion/styled';

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const GalleryHero = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }

  & .alice-carousel__dots {
    margin: 0;
    position: absolute;
    bottom: 40px;
    left: 50%;
    z-index: 500;
    transform: translate(-50%, 0);

    &-item {
      margin: 0;
    }
  }
  & .alice-carousel__dots-item:not(.__custom):not(:last-child) {
    margin-right: 4px;
  }
  & .alice-carousel__dots-item {
    width: 16px;
    height: 16px;
    background-color: var(--white);
  }

  & .alice-carousel__dots-item:not(.__custom).__active {
    background-color: var(--brown);
  }
  & .alice-carousel__dots-item:not(.__active):hover {
    background-color: var(--brown);
    opacity: 0.8;
  }
`;
