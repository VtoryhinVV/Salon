import styled from '@emotion/styled';

export const GalleryBox = styled.div`
  & .alice-carousel {
    width: 415px;
  }
  & .alice-carousel__prev-btn,
  & .alice-carousel__next-btn {
    width: 50px;
    height: 50px;
    padding: 0;
    margin-top: 24px;
    transform: translate(-100%);
    cursor: pointer;
  }
  & .alice-carousel__prev-btn {
    margin-left: 50%;
  }
`;
export const TwoInOn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 416px;
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
