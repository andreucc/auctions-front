import React, { Component } from 'react';

class AuctionCard extends Component {
  render() {
    return (
      <li className="card">
        <div className="img-container">
          <p>Timer</p>
          <img src={this.props.image} alt="imgservice" />
          <h3>{this.props.name}</h3>
          <span className="current-price">{this.props.price}€</span>
        </div>
        <div className="info-container">
          <div className="user-info">
            <div className="img-profile">
              <img src={this.props.userimage} alt="imguser" />
            </div>

            <h4>{this.props.buyername}</h4>
          </div>
          <p className="location">{this.props.buyerlocation}</p>
        </div>
      </li>
    );
  }
}

export default AuctionCard;
