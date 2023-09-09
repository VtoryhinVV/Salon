import styled from '@emotion/styled';

export const MedicalGiftSection = styled.section`
  padding: 120px 0;
`;

export const MedicalGiftTitle = styled.h2`
  margin: 0 16px 0 0;
  text-align: center;
  font-family: Prata;
  font-size: 32px;
  font-weight: 400;
  letter-spacing: 0.64px;
  text-transform: capitalize;
`;

export const MedicalGiftText = styled.p`
  text-align: center;
`;

export const MedicalGiftBtn = styled.a`
  display: block;
  margin: 0 auto;
  padding: 12px 24px;

  width: 169px;

  border: 1px solid var(--brown);
  color: var(--brown);

  text-decoration: none;

  transition: all 0.3s ease;

  &:hover,
  &:focus {
    border-color: var(--focus);
    color: var(--focus);
  }
`;
