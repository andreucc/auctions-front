import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from './AuthProvider';
import Sidebar from '../components/Sidebar'

class Navbar extends Component {
  render() {
    const { isLogged, user, logout } = this.props;
    const { image } = user;
    
    if (isLogged) {
      return (
        <div className="navbar">
          <div className="row navbar-inner">
            <Sidebar />
            <p>menu</p>
            <Link to="/myprofile">
              <img className="img-profile" src={image} alt="" />
            </Link>
          </div>
        </div>
      )
    } else {
      return <div></div>
    }

  }
}

export default withAuth(Navbar);