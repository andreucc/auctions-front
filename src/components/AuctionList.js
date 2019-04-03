import React, { Component } from 'react';
import Navbar from './Navbar';
import AuctionCard from './AuctionCard';
import apiService from '../lib/api-service'

class AuctionList extends Component {

  state = {
    auctions: [],
    status: false,
    auctionsBidded: [],
    showall: true,
    classButtonActive: 'btn-tabs active',
    classButtonBidded: 'btn-tabs'
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
  
    apiService.mybiddedAuctions()
    .then((data) => {
      this.setState({
        auctionsBidded: data.data,
        status: true
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }

  showAll = () => {
    this.setState({
      showall: true,
      classButtonActive: 'btn-tabs active',
      classButtonBidded: 'btn-tabs'
    })
  }

  showBidded = () => {
    this.setState({
      showall: false,
      classButtonActive: 'btn-tabs',
      classButtonBidded: 'btn-tabs active'
    })
  }

  render() {
    const { status, showall, classButtonActive, classButtonBidded } = this.state
    switch (status) {
      case false:
        return "cargando"
      case true:
        return ( 
          <div>
            <Navbar data='Home'/>
            <div className="main-section">
              <div className="row">
                <div className="tabs-container">
                  <button className={classButtonActive} onClick={this.showAll}>Auction</button>
                  <button className={classButtonBidded} onClick={this.showBidded}>My Auctions</button>
                </div>
                {showall === true ?
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
               : <ul>
                  {this.state.auctionsBidded.map((auction, index) => {
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
                }
              </div>
            </div>
          </div>
        );
      default:
    }
  }
}


export default AuctionList;