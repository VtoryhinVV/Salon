import { ContainerBox } from './Container.styled';

export const Container = ({ overflowVisible = false, children }) => {
  return <ContainerBox visible={overflowVisible}>{children}</ContainerBox>;
};
