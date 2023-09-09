import styled from '@emotion/styled';
import ImgLeft from '../../assets/img/medicalComf1.jpg';
import ImgLeftMob from '../../assets/img/medicalComf1mob.jpg';
import ImgRight from '../../assets/img/medicalComf2.jpg';
import ImgRightMob from '../../assets/img/medicalComf2mob.jpg';

export const ImgLeftBox = styled.div`
  background: url(${ImgLeftMob}), lightgray 50% / cover no-repeat;
  width: 182px;
  height: 262px;

  @media screen and (min-width: 1200px) {
    background: url(${ImgLeft}), lightgray 50% / cover no-repeat;
    width: 324px;
    height: 615px;
  }
`;
export const ImgRightBox = styled.div`
  background: url(${ImgRightMob}), lightgray 50% / cover no-repeat;
  width: 182px;
  height: 290px;

  @media screen and (min-width: 1200px) {
    background: url(${ImgRight}), lightgray 50% / cover no-repeat;
    width: 324px;
    height: 665px;
  }
`;

export const MedicaSection = styled.section`
  padding: 120px 0;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 60px;

    @media screen and (min-width: 768px) {
      flex-direction: row;
    }
  }
`;

export const MedicaTextBox = styled.div`
  max-width: 558px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
`;

export const MedicaTitle = styled.h2`
  text-align: center;
  font-family: Prata;
  font-size: 34px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.68px;
  text-transform: capitalize;
  margin: 0;

  @media screen and (min-width: 1200px) {
    font-size: 48px;
    text-align: start;
    letter-spacing: 0.96px;
  }
`;

export const MedicaText = styled.p`
  margin: 0;
  text-align: center;
  @media screen and (min-width: 1200px) {
    text-align: start;
  }
`;

export const AppoinmentBtn = styled.a`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    padding: 12px 24px;
    margin: 0 auto;
    text-decoration: none;
    width: 176px;
    text-align: center;
    cursor: pointer;
    background-color: var(--brown);
    color: white;
    text-transform: uppercase;
    transition: background-color 0.3s ease;

    &:hover,
    &:focus {
      background-color: var(--focus);
    }
  }

  @media screen and (min-width: 1200px) {
    margin: 0;
  }
`;

export const AppoinmentBtnMob = styled.a`
  margin: 0 auto;
  padding: 12px 24px;
  text-decoration: none;
  width: 176px;
  text-align: center;
  cursor: pointer;
  background-color: var(--brown);
  color: white;
  text-transform: uppercase;
  transition: background-color 0.3s ease;

  &:hover,
  &:focus {
    background-color: var(--focus);
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const MedicaPictBox = styled.div`
  display: flex;
  align-items: end;
  gap: 16px;
  justify-content: center;

  @media screen and (min-width: 1200px) {
    gap: 30px;
  }
`;