import styled from '@emotion/styled';

export const ContainerBox = styled.div`
  overflow: ${props => (props.visible ? 'visible' : 'hidden')};

  max-width: 100%;
  padding-left: 5px;
  padding-right: 5px;
  box-sizing: border-box;
  @media screen and (min-width: 480px) {
    width: 480px;
    margin: 0 auto;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
    padding: 0;
  }
  @media screen and (min-width: 1310px) {
    width: 1300px;
  }
`;
