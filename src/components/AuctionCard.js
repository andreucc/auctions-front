import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import CountdownTimer from './CoundownTimer';

class AuctionCard extends Component {
  
  render() {
    //const Expiracion = moment(this.props.EndingTime).fromNow();
    return (
      <li className="card">
        <div className="img-container">
          {/* <p>Expires {Expiracion}</p> */}
          <h3>{this.props.name}</h3>
          <CountdownTimer expiration={this.props.EndingTime} status={this.props.status} />
          <Link to={`/auction/${this.props.id}`}><img src={this.props.image} alt="imgservice" /></Link>
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
          {this.props.status === false && this.props.currentUser === this.props.winnerId
          ? <h3>WINNER</h3> : null }
          {/* <p>status {this.props.status} cu {this.props.currentUser} wid {this.props.winnerId}</p> */}
        </div>
      </li>
    );
  }
}

export default AuctionCard;
