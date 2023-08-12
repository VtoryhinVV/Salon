import styled from '@emotion/styled';

export const Element = styled.li`
  background-color: ${props => (props.open ? 'hotpink' : '')};
  height: ${props => (props.open ? '200px' : '45px')};
  overflow: hidden;
  position: relative;
  & button {
    position: relative;
    z-index: 6;
  }
  transition: height 500ms;
`;

export const Content = styled.p`
  /* display: ${props => (props.open ? 'block' : 'none')}; */
`;

export const OpenEl = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
`;
