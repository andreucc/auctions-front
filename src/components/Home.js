import React, { Component } from 'react';
import MainButton from './MainButton';
import logo from '../images/logo.png' ;

class Home extends Component {
  render() {
    return (  
      <div className="hero">
        <div className="row hero-inner">
          <img src={logo} alt="logo"/>
          <MainButton text="Already have an account?"/>
        </div>
      </div>
    );
  }
}

export default Home;