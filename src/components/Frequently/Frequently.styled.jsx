import styled from '@emotion/styled';
import bg from '/src/assets/img/BgFrequent.jpg';
import { keyframes } from '@emotion/react';
import { Link } from 'react-router-dom';

export const FrequentlySect = styled.section`
  padding: 60px 0;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: 1200px) {
    padding: 120px 0;

    & > div {
      flex-direction: row;
      justify-content: space-between;
      align-items: baseline;
    }
  }
`;
export const FrequentTitle = styled.div`
  max-width: 465px;
  text-align: center;
  margin-bottom: 60px;
  & > h2 {
    font-family: Prata;
    font-size: 34px;
    font-weight: 400;

    margin: 0 0 24px;

    line-height: 65.04px;
    letter-spacing: 0.02em;
    @media screen and (min-width: 1200px) {
      font-size: 48px;
      text-align: start;
    }
  }
  @media screen and (min-width: 1200px) {
    text-align: start;
    margin-bottom: 0;
  }
`;
export const Accordion = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;
export const ItemContainer = styled.div`
  width: 100%;
  max-width: 465px;
  &:hover svg,
  &:active svg {
    fill: #d0a041;
  }
  @media screen and (min-width: 1200px) {
    max-width: 600px;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 18px;
  font-weight: 600;
  line-height: 21.94px;
  text-align: left;
  padding: 0;

  background-color: inherit;
  color: #333;
  border: none;
  cursor: pointer;
`;

const openAnimation = keyframes`
  from {
    max-height: 0;
    opacity: 0;
  }
  to {
    max-height: 150px; /* Задайте максимальную высоту в соответствии с вашим содержимым */
    opacity: 1;
  }
`;

const closeAnimation = keyframes`
  from {
    max-height: 150px; /* Задайте максимальную высоту в соответствии с вашим содержимым */
    opacity: 1;
  }
  to {
    max-height: 0;
    opacity: 0;
  }
`;

export const Content = styled.div`
  overflow: hidden;
  max-height: ${({ isOpen }) => (isOpen ? '500px' : '0')};
  animation: ${({ isOpen }) => (isOpen ? openAnimation : closeAnimation)} 0.5s
    ease-out;
  transition: max-height 0.5s ease-out, opacity 0.5s ease-out;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};

  box-sizing: border-box;
  padding-top: 8px;
  & p {
    margin: 0;
  }
`;

export const Arrow = styled.span`
  display: inline-block;
  margin-left: 10px;
  transition: transform 0.3s;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  svg {
    width: 24px;
    height: 24px;
    transition: fill 0.3s;
    fill: ${({ isOpen }) => (isOpen ? '#D0A041' : 'black')};
    display: block;
    &:hover,
    &:active {
      fill: #d0a041;
    }
  }
`;

export const ContactLink = styled(Link)`
  color: var(--brown);
  text-decoration: none;
  font-weight: 600;
  &:hover,
  &:focus {
    color: var(--focus);
  }
`;
