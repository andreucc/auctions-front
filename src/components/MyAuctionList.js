import React, { Component } from 'react';
import AuctionCard from './AuctionCard';
import TabButtons from './TabButtons';
import apiService from '../lib/api-service'

class MyAuctionList extends Component {
  
  state ={
    auctions: [],
    status: false
  }

componentDidMount()
{
  apiService.getMyAuctions()
  .then((data) => {
    this.setState({
      auctions : data.data,
      status: true
    })
  })
  .catch((err) => {
    console.log(err);
  })
}

  render() {
    const {status} = this.state
    console.log(this.state.auctions)
    switch (status) {
      case false:
      return "cargando"
      case true:
      return (
      <div className="main-section">
        <TabButtons/>
        {this.state.auctions.map((auction, index) => {
          return <AuctionCard 
            key={`id-${index}`}
            image={auction.service.image}
            name={auction.service.name}
            owner={auction.service.owner}
            price={auction.price}
            userimage={auction.buyer.image}
            buyername={auction.buyer.username}
            buyerlocation={auction.buyer.location}
          />
        })
        } 
      </div>
    );
    default:
    }
  }
}


export default MyAuctionList;