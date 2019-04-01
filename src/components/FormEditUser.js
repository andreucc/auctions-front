import React, { Component } from 'react';
import apiService from '../lib/api-service';
import firebase from 'firebase';
import FileUploader from 'react-firebase-file-uploader';
import { Link } from 'react-router-dom';


class FormEditUser extends Component {
   state = {
      status: false,
      username: '',
      location: '',
      mobile: '',
      id: '',
      image: '',
      isUploading: false,
      progress: 0
   }

   componentDidMount() {
      apiService.getProfile()
         .then((data) => {
            this.setState({
               status: true,
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

   handleUploadSuccess = (filename) => {
      console.log(firebase.storage().ref('autionUser'));
      this.setState(
         {
            image: filename,
            progress: 100,
            isUploading: false
         });
      firebase.storage().ref('userImages').child(filename)
         .getDownloadURL()
         .then(url => this.setState({ image: url }));
   };

   handleUpdateUser = (event) => {
      event.preventDefault();
      const { id, username, location, mobile, image } = this.state;
      const body = { username, image, mobile, location }
      console.log(body)
      apiService.updateProfile(id, body)
   }

   handleInput = (event) => {
      const { name, value } = event.target
      this.setState({ [name]: value })
   }

   render() {
      const { status, image, location, username, mobile } = this.state;
      switch (status) {
         case false:
            return "cargando..."
         case true:
            return (
               <div className="main-section">
                  <p>Hola</p>
                  <form onSubmit={this.handleUpdateUser}>
                     <img src={this.state.image} alt="avatar" />
                     <input onChange={this.handleInput} type="text" name="location" value={location} placeholder="location" />
                     <input onChange={this.handleInput} type="text" name="username" value={username} placeholder="username" />
                     {/* <input type="password" value="" placeholder="password"/> */}
                     <input onChange={this.handleInput} type="number" name="mobile" value={mobile} placeholder="mobile" />
                     <FileUploader
                        accept="image/*"
                        name="image"
                        randomizeFilename
                        storageRef={firebase.storage().ref('userImages')}
                        onUploadStart={this.handleUploadStart}
                        onUploadError={this.handleUploadError}
                        onUploadSuccess={this.handleUploadSuccess}
                        onProgress={this.handleProgress}
                     />
                     {/* <input type="submit" value="submit"/> */}
                     <Link to="/auctions"><button type="submit">Update</button></Link>
                     
                  </form>
               </div>
            )
         default:
      }
   }
}

export default FormEditUser;