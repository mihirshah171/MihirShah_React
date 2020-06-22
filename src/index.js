import React from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Router from './components/Router';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <ErrorBoundary>
    <Router />
  </ErrorBoundary>,
  document.getElementById('root')
);
