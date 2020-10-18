import React from 'react';
import JobCard from '../../components/JobCard/JobCard';
import FollowUpCard from '../FollowUpCard/FollowUpCard';
import AddFollowUp from '../AddFollowUp/AddFollowUp';
import followUpCard from '../FollowUpCard/FollowUpCard';


function JobDetailPage(props) {
    let followUps = props.followUps
    const job = props.location.state.job;
    console.log(followUps)
    let jobs = followUps ?
        <>
            <h1>Job Details</h1>
            <JobCard
                key={job._id}
                job={job}
            />
            <h2>Follow Ups:</h2>
            {followUps.filter(fu => fu.jobID === job._id).map(fu => (
                <FollowUpCard
                    followUp={fu}
                    key={fu._id}
                />
            ))}
            <AddFollowUp
                jobID={job._id} 
                handleAddFollowUp={props.handleAddFollowUp}
                />
        </>
        :
        <>
            <h1>Job Details</h1>
            <JobCard
                key={job._id}
                job={job}
            />
            <AddFollowUp
                jobID={job._id} 
                handleAddFollowUp={props.handleAddFollowUp}
                />
        </>

    return (
        <>
            {jobs}
        </>
    );
}
export default JobDetailPage;
