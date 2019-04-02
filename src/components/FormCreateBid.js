import React, { Component } from 'react';
import apiService from '../lib/api-service'
import {Link} from 'react-router-dom';

class FormCreateBid extends Component {
  state = {
    id: this.props.match.params.id,
    price:''
  }
  
  componentDidMount() {
    const id = this.state.id
    console.log(id)
      apiService.getAuctionDetail(id)
      .then((data) => {
        console.log(data);
        this.setState({
          price: data[0].price,
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  handleCreateBid = (event) => {
    event.preventDefault();
    const { id, price } = this.state;
    const body = {id, price}
    apiService.createBid(body).then(()=>{
      console.log('eiii')
      this.props.history.push('/auctions')
    })
    
  }

  handleInput = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
    console.log(this.state.price)
  }


  render() {
  const { price } = this.state
    return (
      <div className="main-section">
        <form >
          <input onChange={this.handleInput} type="number" name="price" value={price} placeholder="location" />
          {/* <Link to="/auctions"><button type="submit">Bid NOW</button></Link> */}
          <p onClick={this.handleCreateBid}>Pujar</p>
        </form>
      </div>
    );
  }
}

export default FormCreateBid;