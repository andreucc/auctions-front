import React, { Component } from 'react';

class TabButtons extends Component {
  render() {
    return (
      <div className="tabs-container">
         <button className="btn-tabs active">Auction</button>
         <button className="btn-tabs">My auction</button>
      </div>
    );
  }
}

export default TabButtons;