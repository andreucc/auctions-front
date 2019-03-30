import React, { Component } from 'react';
import AuctionCard from './AuctionCard';
import TabButtons from './TabButtons';
import apiService from '../lib/api-service'

class AuctionList extends Component {

  state = {
    auctions: [],
    status: false
  }

  componentDidMount() {
    apiService.getAuctions()
      .then((data) => {
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
    console.log(this.state.auctions)
    switch (status) {
      case false:
        return "cargando"
      case true:
        return ( 
          <div className="main-section">
            <div className="row">
              <TabButtons />
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
                  />
                })
                }
              </ul>
            </div>
          </div>
        );
      default:
    }
  }
}


export default AuctionList;