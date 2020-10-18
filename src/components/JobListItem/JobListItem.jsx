import React from 'react';
import { Link } from 'react-router-dom';
import './JobListItem.css';
import { Card } from 'react-bootstrap';

function JobListItem(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Title className="text-center">{props.job.title}</Card.Title>
            <Card.Link>
                <Link className="btn btn-xs btn-info"
                    to={{
                        pathname: "/details",
                        state: { job: props.job },
                    }} >
                    DETAILS
                    </Link>
                <Link
                    className="btn btn-xs btn-warning"
                    to={{
                        pathname: "/edit",
                        state: { job: props.job },
                    }}
                    style={{width:"100px"}}
                >
                    EDIT
                </Link>
                <button
                    className="btn btn-xs btn-danger margin-left-10"
                    onClick={() => props.handleDeleteJob(props.job._id)}
                >
                    DELETE
                </button>
            </Card.Link>

        </Card>
    );
}

export default JobListItem;