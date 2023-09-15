import styled from '@emotion/styled';

export const BenefitsItem = styled.div`
  position: relative;
  text-align: center;
  padding: 60px 40px 24px;
  box-sizing: border-box;

  box-shadow: 0px 13px 19px 0px rgba(0, 0, 0, 0.07);

  & > h3 {
    font-weight: 600;
  }

  & > svg {
    width: 80px;
    height: 80px;
    padding: 20px;
    box-sizing: border-box;

    background-color: var(--brown);
    fill: white;

    position: absolute;
    top: -40px;
    left: 50%;
    transform: translate(-50%);
  }
`;
