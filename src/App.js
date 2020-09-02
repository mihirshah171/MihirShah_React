import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Inbox from './components/Inbox/Inbox';
import Home from './components/Navs/Home/Home';
import Login from './components/Navs/LogIn/Login';
import SignUp from './components/Navs/SignUp/SignUp';
import Users from './components/Navs/Users/Users';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { SnackbarProvider } from 'notistack';
import ProtectedRoute from './hoc/ProtectedRoute';
export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <SnackbarProvider>
            <Header />
            <Switch>
              <Route path="/inbox" component={Inbox} />
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={SignUp} />
              <ProtectedRoute path='/u' Component={Users} />
            </Switch>
            <Footer />
          </SnackbarProvider>
        </Router>
      </> 
      
    )
  }
}
