import React, { Component } from 'react';
//import {Link} from 'react-router-dom';
import apiService from '../lib/api-service';
import Navbar from './Navbar'
import firebase from 'firebase';
import FileUploader from 'react-firebase-file-uploader';
import moment from 'moment';
import { Link } from 'react-router-dom';


class FormCreateAuction extends Component {
  state = {
    name: '',
    description: '',
    image: '',
    StartingPrice: '',
    EndingDate: '', 
    EndingTime: '',
    status: true,
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
    
    const {name, description, image, StartingPrice,EndingDate, EndingTime, status } = this.state;
    const Ends = EndingDate + ' ' + EndingTime;
    console.log('handleCreate...Ends:'+Ends+EndingDate+EndingTime);
    const body = {name, description, image, StartingPrice, Ends, status };
    console.log(body);      
    apiService.createAuction(body);
  }

  handleUploadSuccess = (filename) => {
    console.log(firebase.storage().ref('autionImages'));
    this.setState({
        image: filename,
        progress: 100,
        isUploading: false
    });

    firebase.storage().ref('auctionImages').child(filename)
        .getDownloadURL()
          .then(url => this.setState({ image: url }));
  };

  render() {

    //const {name, description, image, StartingPrice, EndingTime} = this.state;
     
    const {name, description, image, StartingPrice, EndingDate, EndingTime} = this.state;
    // let {EndingDate, EndingTime} = this.state;
    const now = moment();
    const today = now.format('YYYY-MM-DD');
    const maxDate = now.add(1, 'months').format('DD-MM-YYYY');
    // EndingDate = now.add(3, 'days').format('YYYY-MM-DD');
    // EndingTime= now.format('HH:mm:ss');
    const defaultDate = now.add(3, 'days').format('YYYY-MM-DD');
    const defaultTime= now.format('HH:mm:ss');

      return (
        <div>
        <Navbar data='data'/>
          <div className="row">
            <section className="form-section">
              <form className="user-form" onSubmit={this.handleCreate}>
                <div className="container-fields auction">
                    <img src={image} alt="activity" className="display-none"/>
                    <div className="field">
                      <label>Service image</label> 
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
                     <label>Service name</label>
                      <input onChange={this.handleInput} type="text" name="name"  value={name} placeholder="Name"/>
                    </div>
                    <div className="field">  
                      <label>Description</label>
                      <input onChange={this.handleInput} type="text" name="description"  value={description} placeholder="Description"/>
                    </div>
                    <div className="field"> 
                      <label>Starting price</label> 
                      <input onChange={this.handleInput} type="number" name="StartingPrice"  value={StartingPrice} placeholder="StartingPrice"/>
                    </div>
                    <div className="field">
                      {/* <label>Expiry time</label>
                      <input onChange={this.handleInput} type="text" name="EndingTime"  value={EndingTime} placeholder="EndingTime"/> */}
                      <label>End Date</label>
                      <input type="date" defaultValue={defaultDate} min={today} max={maxDate} name="EndingDate"/>
                      <label>End Time</label>
                      <input type="time" defaultValue= {defaultTime} name="EndingTime"/>
                    </div>
                    {/*
                    <div className="field last">
                      <label>Status</label>  
                       <input onChange={this.handleInput} type="text" name="status"  value={status} placeholder="Status"/>
                    </div> 
                    */}
                </div>
                <div className="buttons-bottom">
                  <button className="btn btn-primary" type="submit">Create Auction</button>
                  {/* <Link to={"/auctions"}><button type="submit">Create Auction</button></Link> */}
                </div>
              </form>
            </section>
          </div>
        </div>

      );
         
  }
}

export default FormCreateAuction;