import React, { Component } from 'react';
import './App.css'
import Auxillary from '../../hoc/Auxillary';
import Test from '../../components/Test'
class App extends Component {
  render() {
    return (
      <Auxillary>
        <Test/>
      </Auxillary>
    );
  }
}

export default App;
