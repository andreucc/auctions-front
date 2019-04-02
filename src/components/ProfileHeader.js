import React, { Component } from 'react';

class ProfileHeader extends Component {
  render() {
    return (
      <div className="profile-header">
        <div className="profile-header-inner">
          <h2>{this.props.name}</h2>
          <p>{this.props.sitio}</p>
        </div>
        <div className="img-profile">
          <img src={this.props.image} alt="profile"/>
        </div>
      
      </div>
    );
  }
}

export default ProfileHeader;