import styled from '@emotion/styled';

export const BoxInfo = styled.div`
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: 32px 40px;
  flex-direction: column;
  justify-content: flex-start;
  display: flex;
  gap: 16px;
  background: var(--white);

  /* Shadow */
  box-shadow: 0px 13px 19px 0px rgba(0, 0, 0, 0.07);
  @media screen and (min-width: 768px) {
    width: calc(100% / 2 - 20px);
  }
`;

export const BoxInfoTitle = styled.h3`
  color: var(--black, #242424);
  font-family: 'Playfair Display';
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
`;
export const BoxInfoText = styled.p`
  align-self: stretch;
  margin: 0;
`;
