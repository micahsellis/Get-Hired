import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { Card, Button, Accordion } from 'react-bootstrap';
import './FollowUpCard.css';


function followUpCard({ followUp, idx }) {
    return (
        <Card>
                <Accordion.Toggle
                as={Card.Header}
                eventKey={ idx }
                style={{backgroundColor: "lightgray"}}
                >
                <Moment local fromNow>{followUp.updatedAt}</Moment>
                </Accordion.Toggle>
            <Accordion.Collapse eventKey={idx}>
            <Card.Body>
                <dl>
                    {followUp.interviewDate ? <>
                        <dt>Interview Date</dt>
                            <dd><Moment local format="MM-DD-YY - hh:mm a">{followUp.interviewDate}</Moment></dd></>
                        : '' }
                    {followUp.interviewAddress ?
                            <>
                            <dt>Interview Address</dt>
                            <dd>{followUp.interviewAddress}</dd>
                        </>
                        : ''}
                    {followUp.contactName ?
                        <>
                        <dt>Contact Name</dt>
                        <dd>{followUp.contactName}
                                {followUp.contactTitle ? <> - {followUp.contactTitle}</> : ''}</dd>
                        </>
                        : ''}
                    {followUp.contactPhone ? <>
                        <dt>Contact Phone</dt>
                        <dd>({followUp.contactPhone.toString().slice(0, 3)}) {followUp.contactPhone.toString().slice(3, 6)}-{followUp.contactPhone.toString().slice(6, 10)}</dd>
                        </>: ''}
                    {followUp.contactEmail ? <>
                        <dt>Contact Email</dt>
                        <dd>{followUp.contactEmail}</dd>
                        </>: ''}
                    {followUp.contactURL ? <>
                        <dt>Contact URL</dt>
                        <dd>{followUp.contactURL}</dd>
                        </>: ''}
                    {followUp.notes ? <>
                        <dt>Notes</dt>
                        <dd>{followUp.notes}</dd>
                        </>: ''}
                    <dt>Currently Tracking</dt>
                    <dd>{followUp.active ? 'Yes' : 'No'}</dd>
                    <dt>Date Created</dt>
                        <dd><Moment local format="MM-DD-YY - hh:mm a">{followUp.createdAt}</Moment></dd>
                        <dt>Last Updated</dt>
                        <dd><Moment local format="MM-DD-YY - hh:mm a">{followUp.updatedAt}</Moment></dd>
                </dl>
                <Link
                    className="btn btn-xs btn-warning"
                    to={{
                        pathname: "/edit/followup",
                        state: { followUp },
                    }}
                >
                        EDIT
                </Link>
            </Card.Body>
            </Accordion.Collapse>
        </Card>
    );
}

export default followUpCard;