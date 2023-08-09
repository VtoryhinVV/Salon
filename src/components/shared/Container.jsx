import PropTypes from 'prop-types';
import { ContainerBox } from './Container.styled';

export const Container = ({ children }) => {
  return <ContainerBox>{children}</ContainerBox>;
};

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
};
