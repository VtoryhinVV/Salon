import styled from '@emotion/styled';

export const StaticBlock = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
`;

export const GalleryImg = styled.img`
  width: ${props => (props.twoImg ? '500px' : '375px')};
  @media screen and (min-width: 1350px) {
    width: ${props => (props.twoImg ? '100%' : '416px')};
  }
`;

export const TwoInOne = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
