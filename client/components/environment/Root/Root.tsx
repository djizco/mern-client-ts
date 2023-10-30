import React from 'react';

import { Provider } from 'react-redux';
import { HistoryRouter as Router } from 'redux-first-history/rr6';

import { ThemeProvider } from '@mui/material/styles';

import theme from '_client/styles/ts/theme';

import Main from '_components/environment/Main';

export interface RootProps {
  history: any;
  store: any;
}

export default function Root({ history, store }: RootProps) {
  return (
    <Provider store={store}>
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <Main />
        </ThemeProvider>
      </Router>
    </Provider>
  );
}
