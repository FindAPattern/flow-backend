import React from 'react';
import ReactDOM from 'react-dom';
import './client/index.css';
import App from './client/App';
import registerServiceWorker from './client/registerServiceWorker';

const root: ?HTMLElement = document.getElementById('root');

if (root != null) {
  ReactDOM.render(<App />, root);
  registerServiceWorker();
}
