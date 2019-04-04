import React, { Component } from 'react';
import { withAuth } from '../components/AuthProvider';
import { Link } from 'react-router-dom';

class Login extends Component {
  state = {
    username: "",
    password: "",
    error: ''
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state

    this.props.login({ username, password })
    
    .then((error) => {
      if (error) {
        console.log('error ' + error.data.code)
        this.setState({
          username: "",
          password: "",
          error: error.data.code,
          isError: true
        })
      }
   
      this.props.history.push('/auctions')
    })
      .catch(error => console.log(error))
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { username, password, error, isError } = this.state;
    return (
      <div>
        <div className="navbar-annon">
          <div className="row navbar-inner-annon">
            <p>Login</p>
          </div>
        </div>
        <div className="row">
          <section className="form-section">
            <form className="user-form" onSubmit={this.handleFormSubmit}>
              <div className="container-fields">
                <div className="field">
                  <label>Username:</label>
                  <input type="text" name="username" value={username} onChange={this.handleChange} placeholder="username" required/>
                </div>
                <div className="field">
                  <label>Password:</label>
                  <input type="password" name="password" value={password} onChange={this.handleChange} placeholder="password" required/>
                </div>
                { isError ? <h4>{error}</h4> : null  }
              </div>
              
              <div className="buttons-bottom form">
                <input className="btn btn-primary" type="submit" value="Login" />
                <p>Don't have you acount? <Link to={"/signup"}> Signup</Link></p>
              </div>
              
              { isError && <h4>{error}</h4>   }
            </form>
          </section>
        </div>
      </div>
    )
  }
}

export default withAuth(Login);

