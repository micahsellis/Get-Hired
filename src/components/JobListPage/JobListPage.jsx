import React from "react";
import "./JobListPage.css";
import JobListItem from "../JobListItem/JobListItem";
import { CardColumns } from "react-bootstrap";

function JobListPage(props) {
    return (
        <>
            <h1 className="text-center">Job List</h1>
                <CardColumns>
                {props.jobs.map(job => (
                    <JobListItem
                        job={job}
                        key={job._id}
                        handleDeleteJob={props.handleDeleteJob}
                    />
                ))}
                </CardColumns>
        </>
    );
}
export default JobListPage;