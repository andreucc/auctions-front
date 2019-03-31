import React, { Component } from 'react';
import MainButton from './MainButton';

class Home extends Component {
  render() {
    return (  
      <div className="hero">
        <div className="row hero-inner">
          <h1>Auction</h1>
          <MainButton text="Already have an account?"/>
        </div>
      </div>
    );
  }
}

export default Home;