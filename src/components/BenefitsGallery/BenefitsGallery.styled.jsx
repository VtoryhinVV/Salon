import styled from '@emotion/styled';

export const GalleryBox = styled.div`
  margin-bottom: 24px;
  & .alice-carousel {
    width: 250px;
  }
  & .alice-carousel__prev-btn,
  & .alice-carousel__next-btn {
    width: 50px;
    height: 50px;
    padding: 0;
    transform: translate(-100%);
    cursor: pointer;
  }
  & .alice-carousel__prev-btn {
    margin-left: 50%;
  }

  & img,
  & .alice-carousel__stage-item,
  & .alice-carousel__wrapper {
    width: 250px !important;
  }

  @media screen and (min-width: 360px) {
    & img,
    & .alice-carousel__stage-item,
    & .alice-carousel__wrapper,
    & .alice-carousel {
      width: 350px !important;
    }
  }

  @media screen and (min-width: 425px) {
    & img,
    & .alice-carousel__stage-item,
    & .alice-carousel__wrapper,
    & .alice-carousel {
      width: 425px !important;
    }
  }
`;
export const Bc = styled.div`
  padding: 40px 15px 25px;
`;
export const Btn = styled.div`
  background: none;
  border: none;
  width: 50px;
  height: 50px;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    width: 40px;
    height: 40px;
    transition: fill 0.3s ease;
  }
  &:hover > svg,
  &:focus > svg {
    fill: var(--brown);
  }
`;
