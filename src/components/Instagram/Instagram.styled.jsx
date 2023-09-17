import styled from '@emotion/styled';
import bgImg from '/src/assets/img/bgInst.jpg';

export const InstagramSection = styled.section`
  padding: 100px 0;
  background-image: ${props => (props.bg ? `url(${bgImg})` : 'none')};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media screen and (min-width: 768px) {
    padding: 120px 0;
  }
  & .snapwidget-widget {
    height: 300px;
    margin-bottom: 5%;
    @media screen and (min-width: 478px) {
      margin-bottom: 60px;
    }

    @media screen and (min-width: 768px) {
      height: 500px;
    }

    @media screen and (min-width: 1200px) {
      height: 856px;
      margin-bottom: 40px;
    }
  }
`;

export const InstagramTitle = styled.h2`
  font-family: Prata;
  font-size: 34px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.96px;
  text-transform: capitalize;

  margin: 0 0 40px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`;

export const SocialBtns = styled.div`
  display: flex;
  gap: 24px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const AppoinmentBtn = styled.a`
  padding: 12px 24px;
  text-decoration: none;
  width: 221px;
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
`;

export const InstaramBtn = styled.a`
  display: flex;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  width: 238px;
  border: 1px solid var(--brown);
  cursor: pointer;
  color: var(--brown);
  line-height: normal;
  letter-spacing: 0.32px;
  text-transform: uppercase;
  text-decoration: none;

  transition: all 0.3s ease;

  &:hover,
  &:focus {
    border-color: var(--focus);
    color: var(--focus);
  }
`;
