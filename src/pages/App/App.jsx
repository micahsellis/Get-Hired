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
import AddJobPage from '../../components/AddJobPage/AddJobPage';
import JobDetailPage from '../../components/JobDetailPage/JobDetailPage';
import EditJobPage from '../../components/EditJobPage/EditJobPage'

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
      jobs: [...state.jobs, newJob]
    }),
      // Using cb to wait for state to update before rerouting
      () => this.props.history.push('/jobs'));
  }

  handleDeleteJob = async id => {
    await jobAPI.deleteOne(id);
    this.setState(state => ({
      // Yay, filter returns a NEW array
      jobs: state.jobs.filter(j => j._id !== id)
    }), () => this.props.history.push('/jobs'));
  }

  handleUpdateJob = async updatedJobData => {
    const updatedJob = await jobAPI.update(updatedJobData);
    // Using map to replace just the puppy that was updated
    const newJobsArr = this.state.jobs.map(j =>
      j._id === updatedJob._id ? updatedJob : j
    );
    this.setState(
      { jobs: newJobsArr },
      // This cb function runs after state is updated
      () => this.props.history.push('/')
    );
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
            <div>WELCOME! Log in to see your jobs!</div>
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
            <JobListPage
              jobs={this.state.jobs} 
              handleDeleteJob={this.handleDeleteJob}
              />
          } />
          <Route exact path='/add' render={() =>
            <AddJobPage
              handleAddJob={this.handleAddJob}
            />
          } />
          <Route exact path='/details' render={({ location }) =>
            <JobDetailPage location={location} />
          } />
          <Route exact path='/edit' render={({ location }) =>
            <EditJobPage
              handleUpdateJob={this.handleUpdateJob}
              location={location}
            />
          } />
        </Switch>
      </div>
    );
  }
}

export default App;
