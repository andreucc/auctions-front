import React, { Component } from 'react';
import NavbarProfile from './NavbarProfile'
import ProfileHeader from './ProfileHeader'
import MyAuctionList from './MyAuctionList'
import apiService from '../lib/api-service'
import { Link } from 'react-router-dom'

class Profile extends Component {
  
  state = {
    profile: [],
    status: false
  }
  
  componentDidMount() 
    {
      apiService.getProfile()
      .then((data) => {
        this.setState({
          profile: data,
          status: true
        })
      })
      .catch((err) => {
        console.log(err);
      })
    }
    
  render() {
    const { status } = this.state;
    switch(status) {
      case false:
      return "Cargando..."
      case true:
      return (
        <div>
          <NavbarProfile/>
          <div className="row"> 
            <div className="main-section">
                <ProfileHeader 
                  name={this.state.profile.username}
                  sitio={this.state.profile.location}
                  image={this.state.profile.image}
                  id={this.state.profile.id}
                />
                <MyAuctionList />
              </div>
            </div>
            <div className="buttons-bottom">
              <Link to={'/auction/create'}><a className="btn btn-primary">Create auction</a></Link>
            </div>
          </div>
      );
    default:
    }
  }
}

export default Profile;