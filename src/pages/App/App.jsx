import React, { Component } from 'react';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
// import { searchListingAPI } from '../../controllers/githubJobs';
import * as jobAPI from '../../services/jobs-api';
import JobListPage from '../../components/JobListPage/JobListPage';
import AddJobPage from '../../components/AddJobPage/AddJobPage'

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      jobs: []
    };
  }

  /*--- Callback Methods ---*/
  handleLogout = () => {
    userService.logout();
    this.setState({user: null})
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()})
  }

  handleAddJob = async newJobData => {
    const newJob = await jobAPI.create(newJobData);
    this.setState(state => ({
      jobs: [...this.state.jobs, newJob]
    }),
      // Using cb to wait for state to update before rerouting
      () => this.props.history.push('/'));
  }
/*--- Lifecycle Methods ---*/
  
  async componentDidMount() {
    const jobs = await jobAPI.getAll();
    this.setState({ jobs });
  }

  render() {
    return (
      <div>
        <NavBar 
        user={this.state.user} 
        handleLogout={this.handleLogout}
        />
        <Switch>
          <Route exact path='/' render={() =>
            <div>{this.state.jobs.length ? this.state.jobs[0].title : 'Hello'}</div>
          }/>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
              
            />
          }/>
          <Route exact path='/login' render={({history}) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          } />
          <Route exact path='/jobs' render={() => 
            <JobListPage jobs={this.state.jobs} />
          } />
          <Route exact path='/add' render={() =>
            <AddJobPage
              handleAddJob={this.handleAddJob}
            />
          } />
        </Switch>
      </div>
    );
  }
}

export default App;
