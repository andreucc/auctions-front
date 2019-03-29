import React, { Component } from 'react';
import AuctionCard from './AuctionCard';
import TabButtons from './TabButtons';
import apiService from '../lib/api-service'

class AuctionList extends Component {
  
  state ={
    auctions: [],
    status: false
  }

componentDidMount() {
  apiService.getAuctions()
  .then((data) => {
    this.setState({
      auctions : data.data,
      status: true
    })
    console.log(this.state.auctions)
  })
  .catch((err) => {
    console.log(err);
  })
}


renderCard = () => {
return this.state.auctions.map((auction, index) => {
        return <AuctionCard 
                  key={`id-${index}`}
                  image={auction.image}
                  name={auction.name}
                  owner={auction.owner}
                  price={auction.StartingPrice}
                />
      }) 
}

  render() {
    console.log(this.state.auctions);
    const {status} = this.state
    switch (status) {
      case false:
      return "cargando"
      case true:
      return (
      <div>
        <TabButtons/>
        {this.renderCard()}
      </div>
    );
    default:
    }
  }
}


export default AuctionList;