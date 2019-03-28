import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from './AuthProvider';


class Navbar extends Component {
  render() {
    const { isLogged, user, logout } = this.props;
    const { image } = user;
    if (isLogged) {
      return <div>
        <span>menu</span>
        <img src={image} alt=""/>
        {/* <p onClick={logout}>Logout</p> */}
      </div>
    } else {
      return <div>
        <Link to='/login'>Login</Link>
        <Link to='/signup'>Signup</Link>
      </div>
    }
  
  }
}

export default withAuth(Navbar);