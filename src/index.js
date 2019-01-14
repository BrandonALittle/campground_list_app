import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from './components/Context';
import App from './components/App';
import './index.css';

const title = "List O' Campgrounds";

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('app')
);