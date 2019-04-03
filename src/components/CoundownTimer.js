import React, { Component } from 'react';
//import { Route, Redirect } from 'react-router-dom';
import { withAuth } from './AuthProvider';

class CountdownTimer extends Component {
  state = {
    expiration: this.props.expiration,
    days:'',
    hours:'',
    minutes: '',
    seconds: ''
  }

  componentDidMount() 
   {
    const { expiration } = this.state;
    if (this.props.status === true) {
      let datetime = new Date(expiration);
      let now = new Date().getTime();
      let distance = datetime.getTime() - now;
  
      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setInterval(this.updateseconds, 950 )
      this.setState({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      })
    } else {
      return
    }
  }

  updateseconds = () => {
    const { expiration } = this.state;
    let datetime = new Date(expiration); //.gettimer();
    let now = new Date().getTime();
    let distance = datetime.getTime() - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    this.setState({
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    })  
    
  }
  
  render() {
    const {days, hours, minutes, seconds} = this.state

    return (
      <>
      {this.props.status === true ? <p> {days} days {hours}:{minutes}:{seconds}</p> : null}
      </>
    );

  }
}
export default withAuth(CountdownTimer);
