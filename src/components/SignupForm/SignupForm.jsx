import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';
import './SignupForm.css';

class SignupForm extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    passwordConf: ''
  };

  handleChange = (e) => {
    this.props.updateMessage('');
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.signup(this.state);
      this.props.handleSignupOrLogin();
      this.props.history.push('/');
    } catch (err) {
      this.props.updateMessage(err.message);
    }
  }

  isFormInvalid() {
    return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
  }

  render() {
    return (
      <div className="card">
        <div className="col-md-">
          <h1 className="title">Sign Up</h1>
          <div className="container">
            <form onSubmit={this.handleSubmit} >
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="name" className="bmd-label-floating">Name</label>
                    <input type="text" className="form-control" value={this.state.name} name="name" onChange={this.handleChange} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="email" className="bmd-label-floating">Email Address</label>
                    <input type="email" className="form-control" value={this.state.email} name="email" onChange={this.handleChange} />
                    <span class="bmd-help">We'll never share your email with anyone else.</span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="password" className="bmd-label-floating">Password</label>
                    <input type="password" className="form-control" value={this.state.password} name="password" onChange={this.handleChange} />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="password" className="bmd-label-floating">Confrim Password</label>
                    <input type="password" className="form-control" value={this.state.passwordConf} name="passwordConf" onChange={this.handleChange} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col butn">
                  <button className="btn btn-raised btn-success" disabled={this.isFormInvalid()}>Sign Up</button>&nbsp;&nbsp;
                  <Link className="btn btn-danger" to='/'>Cancel</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupForm;
