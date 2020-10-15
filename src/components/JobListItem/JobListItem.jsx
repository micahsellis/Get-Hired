import React from 'react';
import { Link } from 'react-router-dom';
import './JobListItem.css';

function JobListItem(props) {
    return (
        <div className='panel panel-default'>
            <div className="panel-heading">
                <h3 className='panel-title'>{props.job.title}</h3>
            </div>
            <div className="panel-footer PuppyListItem-action-panel">
                <Link
                    className="btn btn-xs btn-info"
                    to={{
                        pathname: "/details",
                        state: { job: props.job },
                    }}
                >
                    DETAILS
                </Link>
                <Link
                    className="btn btn-xs btn-warning"
                    to={{
                        pathname: "/edit",
                        state: { job: props.job },
                    }}
                >
                    EDIT
                </Link>
                <button
                    className="btn btn-xs btn-danger margin-left-10"
                    onClick={() => props.handleDeleteJob(props.job._id)}
                >
                    DELETE
                </button>
            </div>
        </div>
    );
}

export default JobListItem;