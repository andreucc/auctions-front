import React, { Component } from 'react';
import apiService from '../lib/api-service';
import firebase from 'firebase';
import Navbar from './Navbar'
import FileUploader from 'react-firebase-file-uploader';
//import { Link } from 'react-router-dom';


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
      apiService.updateProfile(id, body).then(()=>{
         this.props.history.push('/myprofile')
       })
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
               <div>
                  <Navbar data='data'/>
                  <div className="row">
                     <section className="form-section">
                        <form className="user-form" onSubmit={this.handleUpdateUser}>
                           <div className="container-fields">  
                              <img className="display-none" src={image} alt="avatar" />
                              <div className="field">
                                 <label>Profile image</label> 
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
                              </div>
                              <div className="field">
                                 <label>Location</label>
                                 <input onChange={this.handleInput} type="text" name="location" value={location} placeholder="location" />
                              </div>
                              <div className="field"> 
                              <label>Username</label>  
                                 <input onChange={this.handleInput} type="text" name="username" value={username} placeholder="username" />
                              </div>
                              <div className="field">
                                 {/* <input type="password" value="" placeholder="password"/> */}
                              </div>
                              <div className="field">
                                 <label>Mobile</label>  
                                 <input onChange={this.handleInput} type="number" name="mobile" value={mobile} placeholder="mobile" />
                              </div>
                           </div>
                           {/* <input type="submit" value="submit"/> */}
                           <div className="buttons-bottom">
                              <button className="btn btn-primary" type="submit">Update</button>
                           </div>
                          
                           
                        </form>
                     </section>
                  </div>
               </div>
            )
         default:
      }
   }
}

export default FormEditUser;