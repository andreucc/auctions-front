import React, { Component } from 'react';

class MainButton extends Component {
  render() {
    return (
      <div className="buttons-bottom">
        <a className="btn btn-primary" href="/signup">Signup</a>
        <p>{this.props.text}<a href="/login">Go to login</a></p>
      </div>
    );
  }
}

export default MainButton;