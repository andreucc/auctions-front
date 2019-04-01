import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from './AuthProvider';
import Sidebar from './/Sidebar'

class NavbarProfile extends Component {
   render() {
      const { isLogged, user, logout } = this.props;
      
      if (isLogged) {
        return (
          <div className="navbar">
            <div className="row navbar-inner">
              <Sidebar />
              <p>My Profile</p>
              <Link to="//user/:id/edit">
                  <span className="icon-pencil"></span>
              </Link>
            </div>
          </div>
        )
      } else {
        return <div></div>
      }
  
    }
}

export default withAuth(NavbarProfile);