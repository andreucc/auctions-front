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
    Time: '',
    status: true,
    isUploading: false,
    progress: 0
  }

  componentDidMount() {
    const now = moment();
    const today = now.format('YYYY-MM-DD');
    const maxDate = now.add(1, 'months').format('DD-MM-YYYY');
    const defaultDate = now.add(3, 'days').format('YYYY-MM-DD');
    const defaultTime = now.format('HH:mm:ss');
    this.setState({
      EndingDate: defaultDate,
      Time: defaultTime
    })
  }
  
  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })

  }

  handleCreate = (event) => {
    event.preventDefault();

    const { name, description, image, StartingPrice, EndingDate, Time, status } = this.state;
    const EndingTime = EndingDate + ' ' + Time;
    const body = { name, description, image, StartingPrice, EndingTime, status };
  

    if (!name || !description || !StartingPrice || !EndingTime) {
      // modal error
    }
    else {
      apiService.createAuction(body);
    }
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

    //const {name, description, image, StartingPrice, Time} = this.state;

    const { name, description, image, StartingPrice, EndingDate, Time } = this.state;
    const now = moment();
    const today = now.format('YYYY-MM-DD');
    const maxDate = now.add(1, 'months').format('DD-MM-YYYY');
    const defaultDate = now.add(3, 'days').format('YYYY-MM-DD');
    const defaultTime = now.format('HH:mm:ss');

    return (
      <div>
        <Navbar data='Create Auction' />
        <div className="row">
          <section className="form-section">
            <form className="user-form" onSubmit={this.handleCreate}>
              <div className="container-fields auction">
                <img src={image} alt="activity" className="display-none" />
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
                  <input onChange={this.handleInput} type="text" name="name" value={name} placeholder="Name" />
                </div>
                <div className="field">
                  <label>Description</label>
                  <input onChange={this.handleInput} type="text" name="description" value={description} placeholder="Description" />
                </div>
                <div className="field">
                  <label>Starting price</label>
                  <input onChange={this.handleInput} type="number" name="StartingPrice" value={StartingPrice} placeholder="StartingPrice" min="1" />
                </div>
                <div className="field">
                  <label>End Date</label>
                  <input type="date" onChange={this.handleInput} defaultValue={defaultDate} min={today} max={maxDate} name="EndingDate" value={EndingDate} />
                  <label>End Time</label>
                  <input type="time" onChange={this.handleInput} defaultValue={defaultTime} name="Time" value={Time}/>
                </div>
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