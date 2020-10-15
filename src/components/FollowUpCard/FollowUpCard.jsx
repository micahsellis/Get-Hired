import React from 'react';
import moment from 'moment';

function followUpCard({ followUp }) {
    return (
        <div className='panel panel-default'>
            <div className="panel-heading">
                <h3 className='panel-title'>{followUp.createdAt.moment().format("MMM Do YY")}</h3>
            </div>
            <div className='panel-body'>
                <dl>
                    {followUp.interviewDate ?
                        `<dt>Interview Date</dt>
                        <dd>${followUp.interviewDate.moment().format('MMMM Do YYYY, h:mm:ss a')}</dd>`
                        : '' }
                    {followUp.interviewAddress ?
                        `<dt>Interview Address</dt>
                        <dd>${followUp.interviewAddress}</dd>`
                        : ''}
                    {followUp.contactName ?
                        `<dt>Contact Name</dt>
                        <dd>${followUp.contactName}${followUp.contactTitle ? ' - ' + followUp.contactTitle : ''}</dd>`
                        : ''}
                    {followUp.contactPhone ?
                        `<dt>Contact Phone</dt>
                        <dd>${followUp.contactPhone.toString().slice(0, 3)}) ${followUp.contactPhone.toString().slice(3, 6)}-${followUp.contactPhone.toString().slice(6, 10)}</dd>`
                        : ''}
                    {followUp.contactEmail ?
                        `<dt>Contact Email</dt>
                        <dd>${followUp.contactEmail}</dd>`
                        : ''}
                    {followUp.contactURL ?
                        `<dt>Contact URL</dt>
                        <dd>${followUp.contactURL}</dd>`
                        : ''}
                    {followUp.notes ?
                        `<dt>Notes</dt>
                        <dd>${followUp.notes}</dd>`
                        : ''}
                    <dt>Currently Tracking</dt>
                    <dd>{followUp.active ? 'Yes' : 'No'}</dd>
                </dl>
            </div>
        </div>
    );
}

export default followUpCard;