import React, { Component } from 'react';
import classes from './App.module.css';
import Dashboard from './container/Dashboard';
import Header from './components/UI/Header/Header';
import Footer from './components/UI/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className={classes.Container}>
        <Header />
        <Dashboard />
        <Footer />
      </div >
    );
  }
}

export default App;