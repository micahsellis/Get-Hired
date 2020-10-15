import React from 'react';
import { Link } from 'react-router-dom';

function JobCard({ job }) {
    return (
        <div className='panel panel-default'>
            <div className="panel-heading">
                <h3 className='panel-title'>{job.title}</h3>
            </div>
            <div className='panel-body'>
                <dl>
                    <dt>URL</dt>
                    <dd>{job.jobURL ? job.jobURL : ''}</dd>
                    <dt>Company</dt>
                    <dd>{job.company ? job.company : ''}</dd>
                    <dt>Address</dt>
                    <dd>{job.address ? job.address : ''}</dd>
                    <dt>Phone Number</dt>
                    <dd>{job.phone ? `(${job.phone.toString().slice(0, 3)}) ${job.phone.toString().slice(3, 6)}-${job.phone.toString().slice(6, 10)}` : ''}</dd>
                    <dt>Email</dt>
                    <dd>{job.email ? job.email : ''}</dd>
                    <dt>Hiring Manager</dt>
                    <dd>{job.manager ? job.manager : ''}{job.managerTitle ? ` - ${job.managerTitle}` : ''}</dd>
                    <dt>Hiring Mangaer Email</dt>
                    <dd>{job.managerEmail ? job.managerEmail : ''}</dd>
                    <dt>Hiring Manager Phone</dt>
                    <dd>{job.managerPhone ? `(${job.managerPhone.toString().slice(0, 3)}) ${job.managerPhone.toString().slice(3, 6)}-${job.managerPhone.toString().slice(6, 10)}` : ''}</dd>
                    <dt>Currently Tracking</dt>
                    <dd>{job.active ? 'Yes' : 'No'}</dd>
                </dl>
            </div>
            <div className='panel-footer'>
                <Link to='/jobs'>RETURN TO LIST</Link>
            </div>
        </div>
    );
}

export default JobCard;