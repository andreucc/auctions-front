import React, { Component } from 'react';
import TabButtons from './Components/TabButtons'
import ProfileHeader from './Components/ProfileHeader'
import AuctionList from './Components/AuctionList'

class Profile extends Component {
  render() {
    return (
      <div>
        <ProfileHeader/> 
        <TabButtons/>
        <AuctionList/>
      </div>
    );
  }
}

export default Profile;