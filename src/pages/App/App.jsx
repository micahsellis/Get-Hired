import React, { Component } from 'react';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
// import { searchListingAPI } from '../../controllers/githubJobs';
import * as jobAPI from '../../services/jobs-api';
import * as followUpAPI from '../../services/followups-api'
import JobListPage from '../../components/JobListPage/JobListPage';
import AddJobPage from '../../components/AddJobPage/AddJobPage';
import JobDetailPage from '../../components/JobDetailPage/JobDetailPage';
import EditJobPage from '../../components/EditJobPage/EditJobPage';
import EditFollowUpPage from '../../components/EditFollowUp/EditFollowUpPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      jobs: [],
      followUps: []
    };
  }

  /*--- Callback Methods ---*/
  handleLogout = () => {
    userService.logout();
    this.setState({user: null})
  }

  handleSignupOrLogin = () => {
    this.setState({
      user: userService.getUser()
    },
      () => this.seedMyState()
    )
  }

  handleAddJob = async newJobData => {
    const newJob = await jobAPI.create(newJobData);
    this.setState(state => ({
      jobs: [...state.jobs, newJob]
    }),
      // Using cb to wait for state to update before rerouting
      () => this.props.history.push('/jobs'));
  }

  handleAddFollowUp = async newFollowUpData => {
    const newFollowUp = await followUpAPI.create(newFollowUpData);
    this.setState(state => ({
      followUps: [...state.followUps, newFollowUp]
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

  handleDeleteFollowUp = async id => {
    await followUpAPI.deleteOne(id);
    this.setState(state => ({
      // Yay, filter returns a NEW array
      followUps: state.followUps.filter(fu => fu._id !== id)
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
      () => this.props.history.push('/jobs')
    );
  }


  handleUpdateFollowUp = async updatedFollowUpData => {
    const updatedFollowUp = await followUpAPI.update(updatedFollowUpData);
    // Using map to replace just the puppy that was updated
    const newFollowUpArr = this.state.followUps.map(fu =>
      fu._id === updatedFollowUp._id ? updatedFollowUp : fu
    );
    this.setState(
      { followUps: newFollowUpArr },
      // This cb function runs after state is updated
      () => this.props.history.push('/jobs')
    );
  }

  async seedMyState() {
    const jobs = await jobAPI.getAll();
    const followUps = await followUpAPI.getAll();
    console.log(followUps)
    this.setState({ jobs, followUps });
  }

/*--- Lifecycle Methods ---*/
  
  async componentDidMount() {
    this.seedMyState()
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
            <JobDetailPage
              location={location} 
              handleAddFollowUp={this.handleAddFollowUp}
              followUps={this.state.followUps}
            />
          } />
          <Route exact path='/edit' render={({ location }) =>
            <EditJobPage
              handleUpdateJob={this.handleUpdateJob}
              location={location}
            />
          } />
          <Route exact path='/edit/followup' render={({ location }) =>
            <EditFollowUpPage
              handleUpdateFollowUp={this.handleUpdateFollowUp}
              location={location}
              handleDeleteFollowUp={this.handleUpdateFollowUp}
            />
          } />
        </Switch>
      </div>
    );
  }
}

export default App;
