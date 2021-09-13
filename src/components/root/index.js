import React from 'heatug/src/macros/core/root/macro';
import { ThemeProvider as Theming } from '@mui/material/styles';

import theme from 'themes/default';
import { App, Style } from 'components';

export default () => (
  <Theming theme={theme}>
    <Style />
    <App />
  </Theming>
);
