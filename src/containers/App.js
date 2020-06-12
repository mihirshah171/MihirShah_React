import React, { Component } from 'react';
import './App.css'
import Auxillary from '../hoc/Auxillary';
class App extends Component {
  render() {
    return (
      <Auxillary>
        <div className='App'>
          <h1>Hello Now Using React</h1>
        </div>
      </Auxillary>
    );
  }
}

export default App;
