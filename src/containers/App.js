import React, { Component, Fragment } from 'react';
import Header from '../components/Header';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header
          header='React is On!'
        />
      </Fragment>
    );
  }
}

export default App;
