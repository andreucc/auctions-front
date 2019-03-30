import React, { Component } from 'react';
import apiService from '../lib/api-service';



class FormCreateAuction extends Component {
  state = {
    name: '',
    description: '',
    image: '',
    StartingPrice: '',
    EndingTime: '',
    status: '',
  }

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState ({
       [name]: value
    })
    
  }

  handleCreate = (event) => {
    event.preventDefault();
    
    const {name, description, image, StartingPrice, EndingTime, status } = this.state;
    const body = {name, description, image, StartingPrice}  //  EndingTime, status 
    console.log(body)      
    apiService.createAuction(body)
  }

  render() {

    const {name, description, image, StartingPrice, EndingTime, status} = this.state;
    
      return (
        <div>
          <form onSubmit={this.handleCreate}>
            <input onChange={this.handleInput} type="text" name="name"  value={name} placeholder="name"/>
            <input onChange={this.handleInput} type="text" name="description"  value={description} placeholder="description"/>
            <input onChange={this.handleInput} type="text" name="image"  value={image} placeholder="imagen"/>
            <input onChange={this.handleInput} type="number" name="StartingPrice"  value={StartingPrice} placeholder="StartingPrice"/>
            <input onChange={this.handleInput} type="text" name="EndingTime"  value={EndingTime} placeholder="EndingTime"/>
            <input onChange={this.handleInput} type="text" name="status"  value={status} placeholder="status"/>
            <button type="submit">Create Auction</button>
          </form>
          
        </div>
      );
         
  }
}

export default FormCreateAuction;