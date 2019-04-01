import React, { Component } from 'react';
import apiService from '../lib/api-service';
import firebase from 'firebase';
import FileUploader from 'react-firebase-file-uploader';



class FormCreateAuction extends Component {
  state = {
    name: '',
    description: '',
    image: '',
    StartingPrice: '',
    EndingTime: '',
    status: '',
    isUploading: false,
    progress: 0
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

  handleUploadSuccess = (filename) => {
    console.log(firebase.storage().ref('autionImages'));
    this.setState(
      {
        image: filename,
        progress: 100,
        isUploading: false
      });
    firebase.storage().ref('auctionImages').child(filename)
        .getDownloadURL()
          .then(url => this.setState({ image: url }));
  };
  render() {

    const {name, description, image, StartingPrice, EndingTime, status} = this.state;
    
      return (
        <div className="row">
          <section className="form-section">
            <form className="user-form" onSubmit={this.handleCreate}>
              <div className="container-fields">
                  <img src={image} alt="activity" className="display-none"/>
                  <div className="field">  
                    <FileUploader           
                      accept="image/*"
                      name="image"
                      randomizeFilename
                      storageRef={firebase.storage().ref('auctionImages')}
                      onUploadStart={this.handleUploadStart}
                      onUploadError={this.handleUploadError}
                      onUploadSuccess={this.handleUploadSuccess}
                      onProgress={this.handleProgress}
                    />
                  </div>
                  <div className="field">
                    <input onChange={this.handleInput} type="text" name="name"  value={name} placeholder="Name"/>
                  </div>
                  <div className="field">  
                    <input onChange={this.handleInput} type="text" name="description"  value={description} placeholder="Description"/>
                  </div>
                  <div className="field">  
                    <input onChange={this.handleInput} type="number" name="StartingPrice"  value={StartingPrice} placeholder="StartingPrice"/>
                  </div>
                  <div className="field">  
                    <input onChange={this.handleInput} type="text" name="EndingTime"  value={EndingTime} placeholder="EndingTime"/>
                  </div>
                  <div className="field">  
                    <input onChange={this.handleInput} type="text" name="status"  value={status} placeholder="Status"/>
                  </div>
              </div>
              <div className="buttons-bottom">
                <button className="btn btn-primary" type="submit">Create Auction</button>
              </div>
            </form>
          </section>
        </div>

      );
         
  }
}

export default FormCreateAuction;