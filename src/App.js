import React, { Component } from 'react';
import {Switch} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
import Navbar from './components/Navbar';
// import Private from './pages/Private';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './components/Home'
import AuctionList from './components/AuctionList'
import AuthProvider from './components/AuthProvider';
import Profile from './components/Profile';
import FormEditUser from './components/FormEditUser';
import FormCreateAuction from './components/FormCreateAuction';
import MyAuctionList from './components/MyAuctionList';
import './App.css'
import AuctionDetail from './components/AuctionDetail';




class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Navbar data='data' />
          <Switch>
            <AnonRoute exact path="/" component={Home}/>
            <AnonRoute path="/signup" component={Signup} />
            <AnonRoute path="/login" component={Login} />
            <PrivateRoute exact path="/auctions" component={AuctionList} />
            <PrivateRoute exact path="/auctions/me" component={MyAuctionList} />
            <PrivateRoute exact path="/myprofile" component={Profile}/>
            <PrivateRoute exact path="/user/:id/edit" component={FormEditUser}/>
            <PrivateRoute exact path="/auction/create" component={FormCreateAuction}/>
            <PrivateRoute exact path="/auction/:id" component={AuctionDetail}/>
          </Switch>
      </AuthProvider>
    )
  }
}

export default App;
