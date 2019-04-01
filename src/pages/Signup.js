import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../components/AuthProvider';

class Signup extends Component {

  state = {
    username: "",
    password: "",
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.props.signup({ username, password })
      .then( (user) => {
        this.setState({
            username: "",
            password: "",
        });
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
            <p>Signup</p>
          </div>
        </div>
        {/* <section>
          <form onSubmit={this.handleFormSubmit}>
            <label>Username:</label>
            <input type="text" name="username" value={username} onChange={this.handleChange}/>
            <label>Password:</label>
            <input type="password" name="password" value={password} onChange={this.handleChange} />
            <input type="submit" value="Signup" />
          </form>
          <p>Already have account? 
            <Link to={"/login"}> Login</Link>
          </p>
      </section> */}
      <div className="row">
        <section className="form-section">
          <form className="user-form" onSubmit={this.handleFormSubmit}>
            <div className="container-fields">
              <div className="field">
                <label>Username:</label>
                <input type="text" name="username" value={username} onChange={this.handleChange} placeholder="username"/>
              </div>
              <div className="field">
                <label>Password:</label>
                <input type="password" name="password" value={password} onChange={this.handleChange} placeholder="password" />
              </div>
            </div>
            <div className="buttons-bottom form">
              <input className="btn btn-primary" type="submit" value="Login" />
              <p>Already have account? 
              <Link to={"/login"}> Login</Link>
              </p>
            </div>
          </form>
        </section>
      </div>
    </div>
    )
  }
}

export default withAuth(Signup);