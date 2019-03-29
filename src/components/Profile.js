import React, { Component } from 'react';
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
          <ProfileHeader 
            name={this.state.profile.username}
            sitio={this.state.profile.location}
            image={this.state.profile.image}
          /> 
          <MyAuctionList />
        </div>
      );
    default:
    }
  }
}

export default Profile;