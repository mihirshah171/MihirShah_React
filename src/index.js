import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById('root')
);
