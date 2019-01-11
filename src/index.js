import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from './components/Context';
// import App from './components/App';

const title = "List O' Campgrounds";

ReactDOM.render(
  <Provider>{ title }</Provider>,
  document.getElementById('app')
);