import React, { Component } from 'react';
import TabButtons from './TabButtons'
import ProfileHeader from './ProfileHeader'
import AuctionList from './AuctionList'

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