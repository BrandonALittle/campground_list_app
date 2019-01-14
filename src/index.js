import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Provider } from './components/Context';
import App from './components/App';
import './index.css';

const title = "List O' Campgrounds";

ReactDOM.render(
  <Router>
    <Provider>
      <Route component={App}/>
    </Provider>
  </Router>,
  document.getElementById('app')
);