import React, { Component } from 'react';

class AuctionCard extends Component {
  render() {
    return (
      <div className="card">
        <div>
          <p>Timer</p>
          <img src={this.props.image} alt="img"/>
          <h3>{this.props.name}</h3>
          <span>{this.props.price}</span>
        </div>
        <div>
          <img src="" alt="img"/>
          <h4>User name</h4>
          <p>Location</p>
        </div>
      </div>
    );
  }
}

export default AuctionCard;