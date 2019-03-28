import React, { Component } from 'react';
import AuctionCard from './AuctionCard';
import axios from 'axios';
import TabButtons from './Components/TabButtons'

class AuctionList extends Component {
  
  state ={
    auctions: [],
    status: false
  }

  componentDidMount()
  {
     axios.get('http://localhost:5000/api/auctions')
    .then(({data}) => {
      this.setState({
        auctions : data,
        status: true
      })
      console.log(this.state.auctions)
    })
    .catch((err) => {
      console.log(err)
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

        {this.state.auctions.map((auction, index) => {
          return <AuctionCard 
            key={`id-${index}`}
            image={auction.image}
            name={auction.name}
            owner={auction.owner}
            price={auction.StartingPrice}
          />
        })
        } 
         
      </div>
    );
    default:
    }
  }
}


export default AuctionList;