import React, { Component } from 'react';
import apiService from '../lib/api-service';


class FormEditUser extends Component {
   state = {
      status: false,
      username: '',
      location: '',
      mobile: '',
      id: '',
      image: ''
   }

   componentDidMount(){
      apiService.getProfile()
      .then ((data) => {
         this.setState({
            status : true,
            id: data._id,
            username: data.username,
            location: data.location,
            mobile: data.mobile,
            image: data.image
         })
      }).catch((err) => {
         console.log(err)
      })
   }

   handleUpdateUser = (event) => {
      event.preventDefault();
      const { id, username, location, mobile, image } = this.state;
      const body = {username, image, mobile, location }
      console.log(body)      
      apiService.updateProfile(id, body)
   }

   handleInput = (event) => {
      const { name, value } = event.target
      this.setState({ [name]: value })
   }

   render() {
      const {status, image, location, username, mobile} = this.state;
      switch(status){
         case false:
         return "cargando..."
         case true:
         return(
            <div>
               <p>Hola</p>
            <form onSubmit={this.handleUpdateUser}>
               <input onChange={this.handleInput} type="text" name="location"  value={location} placeholder="location"/>
               <input onChange={this.handleInput} type="text" name="username"  value={username} placeholder="username"/>
               {/* <input type="password" value="" placeholder="password"/> */}
               <input onChange={this.handleInput} type="number" name="mobile" value={mobile} placeholder="mobile"/>
               <input onChange={this.handleInput} type="text" name="image" value={image} placeholder="image"/>
               {/* <input type="submit" value="submit"/> */}
               <button type="submit">Editar</button>
            </form>
         </div>
         )
         default:
      }
   }
}

export default FormEditUser;