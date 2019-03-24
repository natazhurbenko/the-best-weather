import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { ConnectedMain } from './containers/MainWrapper';

import { Provider } from 'react-redux'
import { store } from './store/configureStore'

ReactDOM.render(
  <Provider store={ store }>
    <ConnectedMain />
  </Provider>,
  document.getElementById('root')
);
