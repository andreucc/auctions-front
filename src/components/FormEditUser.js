import React, { Component } from 'react';
import MainButton from './MainButton';
import apiService from '../lib/api-service';


class FormEditUser extends Component {
   state = {
      userProfile : [],
      status: false
   }

   handleUpdateUser(){
      const body = { }
      apiService.updateProfile()

   }

   componentDidMount(){
      apiService.getProfile()
      .then ((data) => {
         this.setState({
            userProfile : data,
            status : true
         })
      }).catch((err) => {
         console.log(err)
      })
   }

   render() {
      const {status} = this.state;
      switch(status){
         case false:
         return "cargando..."
         case true:
         return(
            <div>
               <p>Hola</p>
            <form onSubmit={this.handleUpdateUser}>
               <input type="text" name="location"  value={this.state.userProfile.location} placeholder="location"/>
               <input type="text" name="username"  value={this.state.userProfile.username} placeholder="username"/>
               {/* <input type="password" value="" placeholder="password"/> */}
               <input type="number" name="mobile" value={this.state.userProfile.mobile} placeholder="mobile"/>
               <input type="submit" value="submit"/>
            </form>
         </div>
         )
         default:
      }
   }
}

export default FormEditUser;