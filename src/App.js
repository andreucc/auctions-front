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



class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className="container">
          <Navbar data='data' />
          <Switch>
            <AnonRoute exact path="/" component={Home}/>
            <AnonRoute path="/signup" component={Signup} />
            <AnonRoute path="/login" component={Login} />
            <PrivateRoute path="/auctions" component={AuctionList} />
            <PrivateRoute path="/myprofile" component={Profile}/>
          </Switch>
        </div>
      </AuthProvider>
    )
  }
}
/*
 `post`  |`/auth/signup` 	|SignupPageComponent	|anon only	|signup form, link to login, navigate to homepage after signup
 `post`  |`/auth/login` 	|LoginPageComponent 	|anon only 	|Login form, link to signup, navigate to homepage after login 
 `post`  |`/auth/logout` 	|n/a	 		|anon only 	|navigate to homepage after logout, expire session 
 `get` 	 |`/user/me`     	|UserProfile		|user only 	|details of my user
 `put` 	 |`/user/:id/edit` 	|UserProfile Edit	|user only 	|edit my user profile
 `get`   |`/auctions` 	 	|List Auctioms	 	|user only 	|show all auctions except mine ones
 `get`   |`/auction/:id` 	|Auction Detail	 	|user only 	|show auction details
 `post`	 |`/auction/create` 	|Auction Create	 	|user only 	|create a new auction
 `delete`|`/auction/:id` 	|Auction Delete	 	|user only 	|delete auction
 `get`   |`/auctions/me` 	 	|List Auctioms	 	|user only 	|show all user auctions 
 */
export default App;
