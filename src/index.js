import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './components/App';

import verbs from './verbs.json';

ReactDOM.render(
  <React.StrictMode>
    <App verbs={verbs} />
  </React.StrictMode>,
  document.getElementById('root')
);
