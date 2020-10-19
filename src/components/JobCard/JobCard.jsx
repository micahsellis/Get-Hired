import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

function JobCard({ job }) {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{job.title}</Card.Title><br></br>
                <Card.Text>
                    <dl>
                        {job.jobURL ? <>
                            <dt>URL</dt>
                            <dd>{job.jobURL}</dd> </>: ''}
                        {job.company ? <>
                            <dt>Company</dt>
                            <dd>{job.company}</dd></> : ''}
                        {job.address ? <>
                            <dt>Address</dt>
                            <dd>{job.address}</dd></> : ''}
                        {job.phone ? <>
                            <dt>Phone Number</dt>
                            <dd>({job.phone.toString().slice(0, 3)}) {job.phone.toString().slice(3, 6)}-{job.phone.toString().slice(6, 10)}</dd></> : ''}
                        {job.email ? <>
                            <dt>Email</dt>
                            <dd>{job.email}</dd></> : ''}
                        {job.manager ? <>
                            <dt>Hiring Manager</dt>
                            <dd>{job.manager}{job.managerTitle ? ` - ${job.managerTitle}` : ''}</dd></> : ''}
                        {job.managerEmail ? <>
                            <dt>Hiring Mangaer Email</dt>
                            <dd>{job.managerEmail}</dd></> : ''}
                        {job.managerPhone ? <>
                            <dt>Hiring Manager Phone</dt>
                            <dd>({job.managerPhone.toString().slice(0, 3)}) {job.managerPhone.toString().slice(3, 6)}-{job.managerPhone.toString().slice(6, 10)}</dd></> : ''}
                        <dt>Currently Tracking</dt>
                        <dd>{job.active ? 'Yes' : 'No'}</dd>
                    </dl>
                </Card.Text>
                <Card.Link as={Button} variant="info" href='/jobs'>RETURN TO LIST</Card.Link>
            </Card.Body>
        </Card>
    );
}

export default JobCard;