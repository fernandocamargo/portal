import { string } from 'prop-types';

export const defaultProps = {
  foo: 'bar',
};

export const displayName = 'App';

export const propTypes = {
  className: string.isRequired,
  foo: string,
};
