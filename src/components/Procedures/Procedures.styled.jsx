import styled from '@emotion/styled';
import bg from '../../assets/img/bgServMedProc.jpg';

export const ProceduresSect = styled.section`
  padding: 120px 0;
  background-image: ${props => (props.imgBg ? `url(${bg})` : 'none')};
  background-repeat: no-repeat;
  background-size: cover;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    gap: 40px;
  }
`;

export const AppoinmentBtn = styled.a`
  display: block;
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
`;
