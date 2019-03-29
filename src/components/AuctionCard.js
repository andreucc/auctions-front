import React, { Component } from 'react';

class AuctionCard extends Component {
  render() {
    return (
      <div className="card">
        <div>
          <p>Timer</p>
          <img src={this.props.image} alt="imgservice"/>
          <h3>{this.props.name}</h3>
          <span>{this.props.price}€</span>
        </div>
        <div>
          <img src={this.props.userimage} alt="imguser"/>
          <h4>{this.props.buyername}</h4>
          <p>{this.props.buyerlocation}</p>
        </div>
      </div>
    );
  }
}

export default AuctionCard;
