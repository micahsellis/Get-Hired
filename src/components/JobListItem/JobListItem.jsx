import React from 'react';
import { Link } from 'react-router-dom';
import './JobListItem.css';

function JobListItem(props) {
    return (
        <div className='panel panel-default'>
            <div className="panel-heading">
                <h3 className='panel-title'>{props.job.title}</h3>
            </div>
            <div className='panel-footer JobListItem-action-panel'>

            </div>
        </div>
    );
}

export default JobListItem;