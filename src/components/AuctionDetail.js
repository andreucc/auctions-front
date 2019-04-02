import React, { Component } from 'react';
import Navbar from './Navbar';
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
    description: '',
    locationOwner: '',
    imageOwner: '',
    idAuction: ''
  }
  
  componentDidMount() 
    {
      const id = this.state.id
      apiService.getAuctionDetail(id)
      .then((data) => {
        console.log(data);
        this.setState({
          image: data.auction[0].service.image,
          name: data.auction[0].service.name,
          description: data.auction[0].service.description,
          price: data.auction[0].price,
          nameBuyer: data.auction[0].buyer.username,
          imageBuyer: data.auction[0].buyer.image,
          locationBuyer: data.auction[0].buyer.location,
          owner: data.auction[0].service.owner,
          ownerName: data.owner.username,
          ownerImage: data.owner.image,
          ownerLocation: data.owner.location,
          status: true,
          idAuction: data.auction[0]
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

    handleBidUp = () => {
      const id = this.state.id
      apiService.getAuctionDetail(id)
      .then((data) => {
        console.log(data);
      })
    }

  render() {
    const {image, name, price, imageBuyer, nameBuyer, owner, description, ownerImage, ownerLocation, ownerName} = this.state
    const { user } = this.props
    return (
      <div>
        <Navbar/>
        <div className="main-section">
          <div className="detail">
            <div className="top-content">
              <p>Timer</p>
              <img src={image} alt="img"/>
              <span className="current-price">{price}€</span>
            </div>
            <div className="row bottom-content">
              <h3>{name}</h3>
              <div className="user-info">
                <div className="user-image">
                  <img src={ownerImage} alt="img"/>
                  <h4>{ownerName}</h4>
                </div>
                <p>{ownerLocation}</p>
              </div>
                <p>{description}</p>
                <p>{nameBuyer}</p>
                <img src={imageBuyer} alt="img"/>
              <div>
                {user._id === owner ? 
                  <Link to={`/myprofile`}><button onClick={this.handleDelete}>Delete Auction</button></Link>
                : <Link to={`/bid/create/${this.state.id}`}><button>Bid UP</button></Link>  
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(AuctionDetail);