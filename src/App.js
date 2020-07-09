import React, { Component, Fragment } from 'react'
import Dashboard from './container/Dashboard'
import Footer from './components/UI/Footer/Footer'
import Header from './components/UI/Header/Header'

class App extends Component {
  render () {
    return (
      <Fragment>
        <Header />
        <Dashboard />
        <Footer />
      </Fragment>
    )
  }
}

export default App
