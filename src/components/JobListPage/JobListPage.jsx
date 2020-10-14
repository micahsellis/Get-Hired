import React from "react";
import "./JobListPage.css";
import JobListItem from "../JobListItem/JobListItem";

function JobListPage(props) {
    return (
        <>
            <h1>Job List</h1>
            <div className="JobListPage-grid">
                {props.jobs.map(job => (
                    <JobListItem job={job} key={job._id} />
                ))}
            </div>
        </>
    );
}
export default JobListPage;