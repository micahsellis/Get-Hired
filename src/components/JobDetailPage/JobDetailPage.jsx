import React from 'react';
import JobCard from '../../components/JobCard/JobCard';
import FollowUpCard from '../FollowUpCard/FollowUpCard';
import AddFollowUp from '../AddFollowUp/AddFollowUp';


function JobDetailPage(props) {
    // Refer to PuppyListItem to see how puppy is being passed via the <Link>
    const job = props.location.state.job;
    return (
        <>
            <h1>Job Details</h1>
            <JobCard
                key={job._id}
                job={job}
            />
            {props.followUp.map(fu => (
                <FollowUpCard
                    followUp={fu}
                    key={fu._id}
                />
            ))}
            <AddFollowUp />
        </>
    );
}
export default JobDetailPage;
