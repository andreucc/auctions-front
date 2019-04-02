import React, { Component } from 'react';
import Navbar from './Navbar';
import AuctionCard from './AuctionCard';
import apiService from '../lib/api-service'

class AuctionList extends Component {

  state = {
    auctions: [],
    status: false
  }

  componentDidMount() {
    apiService.getAuctions()
      .then((data) => {
        console.log(data)
        this.setState({
          auctions: data.data,
          status: true
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    const { status } = this.state
    switch (status) {
      case false:
        return "cargando"
      case true:
        return ( 
          <div>
            <Navbar data='data'/>
            <div className="main-section">
              <div className="row">
                <div className="tabs-container" onClick="activeTabs(event)">
                  <button className="btn-tabs active" onClick={this.show1}>Auction</button>
                  <button className="btn-tabs" onClick={this.show2}>My Auctions</button>
                </div>
                <ul>
                  {this.state.auctions.map((auction, index) => {
                    return <AuctionCard
                      key={`id-${index}`}
                      id={auction.service._id}
                      image={auction.service.image}
                      name={auction.service.name}
                      owner={auction.service.owner}
                      price={auction.price}
                      userimage={auction.buyer.image}
                      buyername={auction.buyer.username}
                      buyerlocation={auction.buyer.location}
                      EndingTime={auction.service.EndingTime}
                    />
                  })
                  }
                </ul>
              </div>
            </div>
          </div>
        );
      default:
    }
  }
}


export default AuctionList;