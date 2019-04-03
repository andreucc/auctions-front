import React, { Component } from 'react';
import apiService from '../lib/api-service';
import Navbar from './Navbar';
import AuctionCard from './AuctionCard';
import { withAuth } from '../components/AuthProvider';

class BidAndFinish extends Component {
  
  state = {
    id: this.props.user._id,
    auctions: [],
    status: false,
    winned: [],
    showwinned: true,
    classButtonWinned: 'btn-tabs active',
    classButtonLoosed: 'btn-tabs'
  }
  
  componentDidMount() {
    apiService.mybiddedFinishedAuctions()
      .then((data) => {
        this.setState({
          auctions: data.data,
          status: true
        })
      })
      .catch((err) =>{
        console.log(err)
      }) 

      apiService.myWinnedAuctions()
      .then((data) => {
        console.log("hola")
        console.log(data)
        this.setState({
          winned: data.data,
          status: true
        })
      })
      .catch((err) =>{
        console.log(err)
      })   
  }
  
  showWinned = () => {
    this.setState({
      showwinned: true,
      classButtonWinned: 'btn-tabs active',
      classButtonLoosed: 'btn-tabs'
    })
  }

  showLoosed = () => {
    this.setState({
      showwinned: false,
      classButtonWinned: 'btn-tabs',
      classButtonLoosed: 'btn-tabs active'
    })
  }  



  render() {
    // status
    const { showwinned, classButtonWinned, classButtonLoosed } = this.state
    return (
      <div>
        <Navbar data='Bidded Finished Auctions'/>
         <div className="main-section">
          <div className="row">
           <div>
           <div className="tabs-container">
            <button className={classButtonWinned} onClick={this.showWinned}>Winned</button>
            <button className={classButtonLoosed} onClick={this.showLoosed}>Loosed</button>
           </div>  
           {showwinned === true ?
            <ul>
            {this.state.winned.map((auction, index) => {
              return <AuctionCard
                key={`id-${index}`}
                id={auction.service._id}
                image={auction.service.image}
                name={auction.service.name}
                owner={auction.service.owner}
                price={auction.price}
                userimage={auction.buyer.image}
                buyername={auction.buyer.username}
                buyerlocation={auction.buyer.location}
                EndingTime={auction.service.EndingTime}
                status={auction.service.status}
                currentUser={this.state.id}
                winnerId={auction.buyer._id}
              />
            })
            }
            </ul>
            : <ul>
            {this.state.auctions.map((auction, index) => {
              return <AuctionCard
                key={`id-${index}`}
                id={auction.service._id}
                image={auction.service.image}
                name={auction.service.name}
                owner={auction.service.owner}
                price={auction.price}
                userimage={auction.buyer.image}
                buyername={auction.buyer.username}
                buyerlocation={auction.buyer.location}
                EndingTime={auction.service.EndingTime}
                status={auction.service.status}
                currentUser={this.state.id}
                winnerId={auction.buyer._id}
              />
            })
            }
            </ul>
           }
            </div>
            </div>
          </div>
      </div>
    );
  }
}

export default withAuth(BidAndFinish);