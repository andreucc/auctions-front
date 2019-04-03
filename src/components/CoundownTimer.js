import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { withAuth } from './AuthProvider';
import moment from 'moment';

state = {
  expiration: '',
  timer: ''
}

 render() {
   const { expiration, timer } = this.state;
   let datetime=moment()
    <p></p>
     
}
export default withAuth(CountdownTimer);
