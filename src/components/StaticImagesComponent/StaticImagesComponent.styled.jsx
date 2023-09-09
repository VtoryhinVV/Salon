import styled from '@emotion/styled';

export const StaticBlock = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;

  & img {
    width: 375px;
    @media screen and (min-width: 1350px) {
      width: 416px;
    }
  }
`;

export const TwoInOne = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
