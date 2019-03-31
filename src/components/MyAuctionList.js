import React, { Component } from 'react';
import AuctionCard from './AuctionCard';
import apiService from '../lib/api-service'


class MyAuctionList extends Component {
  
  state ={
    auctions: [],
    status: false,
    finishedAuctions: [] 
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
  apiService.getMyFinishedAuctions()
  .then((data) => {
    this.setState({
      finishedAuctions : data.data,
      status: true
    })
  })
  .catch((err) => {
    console.log(err);
  })
}

show1 = () => {
  document.getElementById('finished').style.display = 'none';
  document.getElementById('active').style.display = 'block';
}
show2 = () => {
  document.getElementById('finished').style.display = 'block';
  document.getElementById('active').style.display = 'none';
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
        <div className="tabs-container">
          <button className="btn-tabs active" onClick={this.show1}>Auction</button>
          <button className="btn-tabs" onClick={this.show2}>Finished auctions</button>
        </div>
          <div id="active">
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
          </div>
          <div id="finished">       
                {this.state.finishedAuctions.map((auction, index) => {
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
          </div>      
      </div>
    );
    default:
    }
  }
}


export default MyAuctionList;