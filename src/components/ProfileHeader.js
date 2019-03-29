import React, { Component } from 'react';

class ProfileHeader extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <p>{this.props.sitio}</p>
        <img src={this.props.image} alt="profile"/>
      </div>
    );
  }
}

export default ProfileHeader;