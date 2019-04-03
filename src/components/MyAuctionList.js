import React, { Component } from 'react';
import AuctionCard from './AuctionCard';
import apiService from '../lib/api-service'


class MyAuctionList extends Component {
  
  state ={
    auctions: [],
    status: false,
    finishedAuctions: [],
    listActive: true, 
    classButtonActive: 'btn-tabs active',
    classButtonFinished: 'btn-tabs'
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

  showactive = () => {
    this.setState({
      listActive: true,
      classButtonActive: 'btn-tabs active',
      classButtonFinished: 'btn-tabs'
    })
  }

  showfinished = () => {
    this.setState({
      listActive: false,
      classButtonActive: 'btn-tabs',
      classButtonFinished: 'btn-tabs active'
    })
  }


  render() {
    const {status, listActive, classButtonActive, classButtonFinished} = this.state
    switch (status) {
      case false:
      return "cargando"
      case true:
      return (
      <div>
        <div className="tabs-container">
          <button className={classButtonActive} onClick={this.showactive}>Auction</button>
          <button className={classButtonFinished} onClick={this.showfinished}>Finished auctions</button>
        </div>
        {listActive === true ?
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
                    EndingTime={auction.service.EndingTime}
                  />
                })
                }
          </div> 
          : <div id="finished">       
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
        }        
      </div>
    );
    default:
    }
  }
}


export default MyAuctionList;