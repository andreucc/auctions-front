import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class ProfileHeader extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <p>{this.props.sitio}</p>
        <Link to={`/user/{this.props.id}/edit`}><img src={this.props.image} alt="profile"/></Link>
      </div>
    );
  }
}

export default ProfileHeader;