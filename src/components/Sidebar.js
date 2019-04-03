import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from './AuthProvider';


class Sidebar extends Component {
   render() {
      const { isLogged, user, logout } = this.props;
      return (
         <div>
            <nav role="navigation">
               <div id="menuToggle">

                  {/* A fake / hidden checkbox is used as click reciever,
               so you can use the :checked selector on it. */}

                  <input type="checkbox" />


                  {/* Some spans to act as a hamburger.
               
               They are acting like a real hamburger,
               not that McDonalds stuff. */}

                  <span></span>
                  <span></span>
                  <span></span>

                  {/*               
                  Too bad the menu has to be inside of the button
                  but hey, it's pure CSS magic. */}


                  <ul id="menu">
                     <input type="checkbox" />
                     <div className="menu-inner">
                        <li>
                           <Link to="/auctions">Home</Link>
                        </li>
                        <li>
                           <Link to="/auctions/finished">Bid history</Link>
                        </li>
                        <li>
                           <Link to="/myprofile">My Profile</Link>
                        </li>
                        <li>
                           <button className="btn-logout" onClick={logout}>Logout</button>
                        </li>
                     </div>
                  </ul>
               </div>
            </nav>
         </div>
      );
   }
}

export default withAuth(Sidebar);