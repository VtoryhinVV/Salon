import styled from '@emotion/styled';
import bgImg from '/img/bg.jpg';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export const ContactUsSection = styled.section`
  padding: 120px 0;

  background-image: url(${bgImg});

  & > div {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  h2,
  h3,
  p,
  ul {
    margin: 0;
    padding: 0;
  }
`;

export const ContactUsTitle = styled.h2`
  font-family: Prata;
  font-size: 34px;
  font-weight: 400;
  letter-spacing: 0.96px;

  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`;

export const ContactUsTimetable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  margin: 0 auto;

  & > h3 {
    text-align: center;
    font-weight: 600;
  }

  @media screen and (min-width: 1200px) {
    width: 630px;
  }
`;

export const ContactUsTimetableList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  text-align: left;

  list-style-type: none;
`;

export const ContactUsTimetableItem = styled.li`
  & > p {
    display: flex;
    flex-direction: column;
    gap: 8px;

    text-align: center;

    @media screen and (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      gap: 40px;

      text-align: left;
    }
  }
`;

export const ContactUsMainContent = styled.div`
  display: flex;
  justify-content: space-around;

  @media screen and (min-width: 1200px) {
    justify-content: none;
    gap: 68px;
  }
`;

export const ContactUsContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 32px;

  @media screen and (min-width: 1200px) {
    width: 550px;
  }
`;

export const ContactUsListData = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 32px;

  list-style-type: none;
`;

export const ContactUsItemData = styled.li`
  display: flex;
  gap: 24px;
  align-items: center;
`;

export const ContactUsIcon = styled.img`
  padding: 18px;
  background-color: var(--brown);
`;

export const ContactUsTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  & > h3 {
    color: #141414;

    font-family: Playfair Display;
    font-size: 24px;
    font-weight: 400;
  }
`;

export const ContactUsForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;

  & > input::placeholder,
  & > textarea::placeholder {
    color: var(--grey);
  }

  & > input {
    padding: 18px 16px;
  }
  & > textarea {
    padding: 16px;
    resize: none;
  }

  @media screen and (min-width: 1200px) {
    gap: 16px;
  }
`;

export const ContactUsLinkContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (min-width: 1200px) {
    justify-content: space-between;
    margin-top: 8px;
  }
`;

export const ContactUsSubmitButton = styled.button`
  padding: 10px 24px;

  border: none;

  background-color: var(--brown);
  color: white;

  transition: all 0.3s ease;

  &:hover,
  &:focus {
    background-color: var(--focus);
  }
`;

export const ContactUsSvgList = styled.ul`
  display: none;

  @media screen and (min-width: 1200px) {
    display: flex;
    gap: 32px;

    list-style-type: none;
  }
`;

export const ContactUsSvgItem = styled.li`
  svg {
    width: 32px;
    height: 32px;

    fill: var(--brown);

    transition: all 0.3s ease;
  }

  svg:hover,
  svg:focus {
    fill: var(--focus);
  }
`;

export const ContactUsImgContainer = styled.div`
  display: none;

  @media screen and (min-width: 1200px) {
    display: flex;
    gap: 30px;
  }
`;

export const ErrorMessageSt = styled(ErrorMessage)`
  color: red;
  padding-left: 5px;
`;
