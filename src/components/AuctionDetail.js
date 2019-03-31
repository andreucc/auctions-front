import React, { Component } from 'react';
import apiService from '../lib/api-service'
import { withAuth } from '../components/AuthProvider';
import {Link} from 'react-router-dom'

class AuctionDetail extends Component {
  
  state = {
    id: this.props.match.params.id,
    image: '',
    name: '',
    price: '',
    status: false,
    imageBuyer: '',
    locationBuyer: '',
    nameBuyer: '',
    owner: '',
    description: ''
  }
  
  componentDidMount() 
    {
      const id = this.state.id
      apiService.getAuctionDetail(id)
      .then((data) => {
        console.log(data);
        this.setState({
          image: data[0].service.image,
          name: data[0].service.name,
          price: data[0].price,
          imageBuyer: data[0].buyer.image,
          locationBuyer: data[0].buyer.location,
          nameBuyer: data[0].buyer.name,
          owner: data[0].service.owner,
          description: data[0].service.description,
          status: true
        })
      })
      .catch((err) => {
        console.log(err);
      })
    }
    
    handleDelete = () => {
      const id = this.state.id
      apiService.deleteAuction(id)
      .then((data) => {
        console.log(data);
      })
    }

  render() {
    const {image, name, price, imageBuyer, nameBuyer, locationBuyer, owner, description} = this.state
    const { user } = this.props
    return (
      <div className="card">
        <div>
          <p>Timer</p>
          <img src={image} alt="img"/>
          <h3>{name}</h3>
          <p>{description}</p>
          <span>{price}€</span>
        </div>
        <div>
          <img src={imageBuyer} alt="img"/>
          <h4>{nameBuyer}</h4>
          <p>{locationBuyer}</p>
        </div>
        <div>
          {user._id === owner ? 
            <Link to={`/myprofile`}><button onClick={this.handleDelete}>Delete Auction</button></Link>
          : null
          }
        </div>
      </div>
    );
  }
}

export default withAuth(AuctionDetail);