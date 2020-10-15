import React from 'react';
import JobCard from '../../components/JobCard/JobCard';

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
        </>
    );
}
export default JobDetailPage;
