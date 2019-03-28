import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../components/AuthProvider';

class Sidebar extends Component {
  render() {
      const { isLogged, user, logout } = this.props; 
      <div>
         <ul>
            <li><a href="">My profile</a></li>
            <li><a href="">Auction</a></li>
            <li><button onClick="{logout}">Logout</button></li>
         </ul>
      </div>
  }
}

export default withAuth(Sidebar);