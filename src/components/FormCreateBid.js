import React, { Component } from 'react';
import apiService from '../lib/api-service'
import {Link} from 'react-router-dom';

class FormCreateBid extends Component {
  state = {
    id: this.props.id,
    price:''
  }
  
  componentDidMount() {
    const id = this.state.id
    console.log(id)
      apiService.getAuctionDetail(id)
      .then((data) => {
        console.log(data);
        this.setState({
          price: data.auction[0].price,
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
    //this.props.history.push(`/auction/${id}#`)
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
      <div className="modal-container">
        <h2>Make a bid</h2>
        <form className="modal-form">
          <div className="container-fields">
            <div className="field">
              <input onChange={this.handleInput} type="number" name="price" value={price} placeholder="location" />
            </div>
          </div>
          {/* <Link to="/auctions"><button type="submit">Bid NOW</button></Link> */}
          <button className="btn btn-primary" onClick={this.handleCreateBid}>Bid</button>
        </form>
      </div>
    );
  }
}

export default FormCreateBid;