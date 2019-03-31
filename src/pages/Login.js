import React, { Component } from 'react';
import { withAuth } from '../components/AuthProvider';
class Login extends Component {
  state = {
    username: "",
    password: "",
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state

    this.props.login({ username, password })
      .then(() => {
        this.props.history.push('/private')
      })
      .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <div className="navbar-annon">
          <div className="row navbar-inner-annon">
            <p>Login</p>
          </div>
        </div>
        <section className="form-section">
          <form className="user-form" onSubmit={this.handleFormSubmit}>
            <div>
              <div className="field">
                <label>Username:</label>
                <input type="text" name="username" value={username} onChange={this.handleChange} placeholder="username"/>
              </div>
              <div className="field">
                <label>Password:</label>
                <input type="password" name="password" value={password} onChange={this.handleChange} placeholder="password" />
              </div>
            </div>
            <input className="btn btn-primary" type="submit" value="Login" />
          </form>
        </section>
      </div>
    )
  }
}

export default withAuth(Login);

