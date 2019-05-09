import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import createBrowserHistory from 'history/createBrowserHistory';
import { MuiThemeProvider } from '@material-ui/core';
import { ebbTheme } from './theme';

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <MuiThemeProvider theme={ebbTheme}>
      <App />
    </MuiThemeProvider>
  </Router>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
