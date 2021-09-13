import { StrictMode } from 'react';
import { render } from 'react-dom';

import { Root } from 'components';
import { measure } from 'tools';

import pckg from '../package.json';

export const initialize = () =>
  render(
    <StrictMode>
      <Root pckg={pckg} />
    </StrictMode>,
    document.getElementById('root'),
    measure.bind(this, process.env.DEBUGGING && console.log)
  );

export default document.fonts.ready.then(initialize);
