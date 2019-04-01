import React, { Component } from 'react';
import NavbarProfile from './NavbarProfile'
import ProfileHeader from './ProfileHeader'
import MyAuctionList from './MyAuctionList'
import apiService from '../lib/api-service'

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
              <a className="btn btn-primary" href="/auction/create">Create auction</a>
            </div>
          </div>
      );
    default:
    }
  }
}

export default Profile;