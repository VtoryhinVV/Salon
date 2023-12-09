import styled from '@emotion/styled';

export const DisclaimerSection = styled.section`
  & > div {
    padding-top: 60px;
    padding-bottom: 60px;
  }
`;

export const Title = styled.div`
  display: flex;
  gap: 24px;

  & h2 {
    font-family: Prata;
    font-size: 48px;
    font-weight: 400;
    letter-spacing: 0.96px;
    text-transform: capitalize;
    margin: 0;
  }

  & > svg {
    width: 60px;
    height: 60px;
    fill: var(--brown);
  }
`;
export const DisclaimerText = styled.p`
  letter-spacing: 0.32px;
`;
