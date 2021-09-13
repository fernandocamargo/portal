import React, {
  useCallback,
  useState,
} from 'heatug/src/macros/core/root/macro';
import { ThemeProvider as Theming } from '@mui/material/styles';

import theme from 'themes/default';
import { App, Style } from 'components';

export const increase = (value) => value + 1;

export default ({ pckg: { name, version } }) => {
  const [counter, setCounter] = useState(1);
  const onClick = useCallback(() => setCounter(increase), []);

  return (
    <>
      <Theming theme={theme}>
        <Style />
        <App />
      </Theming>
      <div>
        <p>Counter: {counter}</p>
        <button onClick={onClick}>Increase</button>
      </div>
      <pre>{JSON.stringify({ name, version }, null, 2)}</pre>
    </>
  );
};
