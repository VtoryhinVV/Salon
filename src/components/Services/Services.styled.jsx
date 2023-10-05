import styled from '@emotion/styled';
import bgServices from '/img/bgServices.jpg';
import { Link } from 'react-router-dom';

export const ServicesSection = styled.section`
  padding-top: 60px;
  padding-bottom: 60px;

  h1,
  h2,
  h3,
  p {
    padding: 0;
    margin: 0;
  }
  background-image: ${props => (props.bg ? `url(${bgServices})` : 'none')};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  & > div {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;

export const ServicesTitle = styled.h2`
  font-family: Prata;
  font-size: 34px;
  font-weight: 400;
  letter-spacing: 0.96px;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 48px;
    text-align: left;
  }
`;

export const ServicesContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
    align-items: flex-start;
  }
  @media screen and (min-width: 1200px) {
    gap: 40px;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
`;

export const ServicesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  list-style-type: none;

  padding: 0;
  margin: 0;
`;

export const ServicesListItem = styled.li`
  position: relative;

  padding: 24px;

  display: flex;
  flex-direction: column;
  gap: 18px;

  background-color: white;

  cursor: pointer;

  box-shadow: var(--shadow);

  @media screen and (min-width: 1200px) {
    width: 637px;
  }
`;

export const ServicesOpenList = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
`;

export const ServicesListVisibleContent = styled.div`
  display: flex;
  justify-content: space-between;

  align-items: center;
`;

export const ServicesListHiddenContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  display: ${props => (props.open ? 'flex' : 'none')};
`;

export const ServicesTextContent = styled.p`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ServicesListItemTitle = styled.h3`
  font-family: Playfair Display;
  font-size: 24px;
  font-weight: 400;
`;

export const ServicesSvg = styled.svg`
  width: 10px;
  height: 10px;
  fill: var(--brown);

  transition: rotate 0.3s ease;
  rotate: ${props => (props.open ? '90deg' : 'none')};
`;

export const ServicesLink = styled(Link)`
  color: var(--brown);
  text-decoration: none;
  width: 105px;
  padding: 10px 24px;

  position: relative;
  z-index: 6;

  transition: color 0.3s ease;

  border: 1px var(--brown) solid;

  &:hover,
  &:focus {
    color: var(--focus);
  }
`;

export const ServicesButtonUnderList = styled.a`
  display: none;
  padding: 12px 24px;
  text-decoration: none;
  cursor: pointer;
  width: 221px;
  text-align: center;

  background-color: var(--brown);
  color: white;

  transition: background-color 0.3s ease;

  @media screen and (min-width: 768px) {
    display: block;
  }

  &:hover,
  &:focus {
    background-color: var(--focus);
  }
`;
export const ServicesButtonUnderImg = styled.a`
  padding: 12px 24px;
  text-decoration: none;

  width: 221px;
  text-align: center;
  cursor: pointer;
  background-color: var(--brown);
  color: white;

  transition: background-color 0.3s ease;

  @media screen and (min-width: 768px) {
    display: none;
  }

  &:hover,
  &:focus {
    background-color: var(--focus);
  }
`;

export const ServicesImg = styled.img`
  width: 300px;

  @media screen and (min-width: 350px) {
    width: 330px;
  }

  @media screen and (min-width: 1200px) {
    width: 470px;
  }
`;
