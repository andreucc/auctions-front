import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class ProfileHeader extends Component {
  render() {
    return (
      <div className="profile-header">
        <div className="profile-header-inner">
          <h2>{this.props.name}</h2>
          <p>{this.props.sitio}</p>
        </div>
        <Link to={`/user/{this.props.id}/edit`}>
          <div className="img-profile">
            <img src={this.props.image} alt="profile"/>
          </div>
        </Link>
      </div>
    );
  }
}

export default ProfileHeader;