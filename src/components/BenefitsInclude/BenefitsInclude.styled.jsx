import styled from '@emotion/styled';

export const AppoinmentBtn = styled.a`
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
`;

export const BenefitsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 80px 24px;
  justify-content: center;
  margin-bottom: 40px;

  & div {
    width: calc(50% - 12px);
    @media screen and (min-width: 1200px) {
      width: ${props =>
        props.widthItem ? 'calc(33.33% - 24px)' : 'calc(50% - 12px)'};
    }
  }
`;

export const BenefitsTitle = styled.h2`
  margin: 0 0 80px;

  font-family: Prata;
  font-size: 48px;

  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.96px;
  text-transform: capitalize;
  text-align: center;
`;

export const BenefitsSection = styled.section`
  padding: 120px 0;
`;
