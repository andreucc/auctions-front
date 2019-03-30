import React, { Component } from 'react';
import apiService from '../lib/api-service'

class AuctionDetail extends Component {
  
  state = {
    id: this.props.match.params.id,
    image: '',
    name: '',
    price: '',
    status: false,
    imageBuyer: '',
    locationBuyer: '',
    nameBuyer: ''
  }
  
  componentDidMount() 
    {
      const id = this.state.id
      apiService.getAuctionDetail(id)
      .then((data) => {
        console.log(data);
        this.setState({
          image: data.service.image,
          name: data.service.name,
          price: data.price,
          imageBuyer: data.buyer.image,
          locationBuyer: data.buyer.location,
          nameBuyer: data.buyer.name,
          status: true
        })
      })
      .catch((err) => {
        console.log(err);
      })
    }

  render() {
    const {image, name, price, imageBuyer, nameBuyer, locationBuyer} = this.state
    return (
      <div className="card">
        <div>
          <p>Timer</p>
          <img src={image} alt="img"/>
          <h3>{name}</h3>
          <span>{price}€</span>
        </div>
        <div>
          <img src={imageBuyer} alt="img"/>
          <h4>{nameBuyer}</h4>
          <p>{locationBuyer}</p>
        </div>
      </div>
    );
  }
}

export default AuctionDetail;