import React from 'react';
import JobCard from '../../components/JobCard/JobCard';
import FollowUpCard from '../FollowUpCard/FollowUpCard';
import AddFollowUp from '../AddFollowUp/AddFollowUp';
import { Accordion, Col, Row } from 'react-bootstrap';





function JobDetailPage(props) {
    let followUps = props.followUps
    const job = props.location.state.job;
    let jobs = followUps ?
        <Row>
            <Col sm={12} md={6} lg={6} style={{margin: "0"}}>
            <h3>Job Details</h3>
            <JobCard
                key={job._id}
                job={job}
            /><br></br>
                <h3>Follow Ups:</h3>
                <Accordion defaultActiveKey="0">
            {followUps.sort((f,u) => f.updatedAt - u.updatedAt).filter(fu => fu.jobID === job._id).map((fu, idx) => (
                <FollowUpCard
                    followUp={fu}
                    idx={idx + 1}
                    handleDeleteFollowUp={props.handleUpdateFollowUp}
                    key={fu._id}
                />
            ))}
                </Accordion>
            </Col>
            <Col sm={12} md={6} lg={6}>
            <h4>Add A Follow Up Action</h4>
            <AddFollowUp
                job={job} 
                handleAddFollowUp={props.handleAddFollowUp}
                />
            </Col>
        </Row>
        :
        <Row>
            <Col sm={12} md={6} lg={6} style={{ margin: "0" }}>
            <h3>Job Details</h3>
            <JobCard
                key={job._id}
                job={job}
                />
            </Col>
            <Col sm={12} md={6} lg={6}>
            <h3>Add A Follow Up Action</h3>
            <AddFollowUp
                job={job} 
                handleAddFollowUp={props.handleAddFollowUp}
                />
            </Col>
        </Row>

    return (
        <>
            {jobs}
        </>
    );
}
export default JobDetailPage;
