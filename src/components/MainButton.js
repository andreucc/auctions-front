import React, { Component } from 'react';

class MainButton extends Component {
  render() {
    return (
      <div>
        <a href="/signup">signup</a>
        <p>{this.props.text}<a href="/login">Go to login</a></p>
      </div>
    );
  }
}

export default MainButton;