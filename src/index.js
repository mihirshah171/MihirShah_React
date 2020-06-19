import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import ToDoApp from './components/ToDoApp';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <ErrorBoundary>
    <ToDoApp />
  </ErrorBoundary>,
  document.getElementById('root')
);
