import styled from '@emotion/styled';

export const ContainerBox = styled.div`
  max-width: 100%;

  @media screen and (min-width: 480px) {
    width: 480px;
    margin: 0 auto;
    padding: 0 5px;
  }
  @media screen and (min-width: 768px) {
    padding-left: 5px;
    padding-right: 5px;
    width: 768px;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
  @media screen and (min-width: 1310px) {
    width: 1300px;
  }
`;
