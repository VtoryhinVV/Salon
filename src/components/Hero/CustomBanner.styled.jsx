import styled from '@emotion/styled';

export const Image = styled.img`
  width: 100%;
  height: 741px;
`;
export const ImageBlock = styled.div`
  width: 100%;
  height: 700px;
  /* background: red; */
  background-image: url(${props => props.backgroundUrl});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (min-width: 768px) {
    height: 500px;
  }

  @media screen and (min-width: 1000px) {
    height: 600px;
  }
  @media screen and (min-width: 1150px) {
    height: 700px;
  }
  @media screen and (min-width: 1250px) {
    height: 800px;
  }
  @media screen and (min-width: 1400px) {
    height: 928px;
  }
`;
export const GalleryHero = styled.div`
  & .alice-carousel__dots {
    display: none;
    @media screen and (min-width: 481px) {
      display: block;
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
