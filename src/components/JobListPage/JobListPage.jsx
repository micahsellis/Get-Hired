import React from "react";
import "./JobListPage.css";
import JobListItem from "../JobListItem/JobListItem";
import { Link } from 'react-router-dom';

function JobListPage(props) {
    return (
        <>
            <h1>Job List</h1>
            <div className="JobListPage-grid">
                {props.jobs.map(job => (
                    <JobListItem
                        job={job}
                        key={job._id}
                        handleDeleteJob={props.handleDeleteJob}
                    />
                ))}
            </div>
        </>
    );
}
export default JobListPage;