import React, { Component } from 'react';
import tokenService from '../../utils/tokenService';
import { Card, Form, Col, Button } from 'react-bootstrap'

class AddFollowUpPage extends Component {
    state = {
        invalidForm: true,
        formData: {
            interviewDate: '',
            interviewAddress: '',
            confirmationEmail: '',
            contactName: '',
            contactTitle: '',
            contactPhone: '',
            contactEmail: '',
            contactURL: '',
            notes: '',
            managerPhone: '',
            userID: tokenService.getUserFromToken()._id,
            jobID: this.props.job._id,
            active: true
        }
    };

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddFollowUp(this.state.formData);
        this.setState({
            formData: {
                interviewDate: '',
                interviewAddress: '',
                confirmationEmail: '',
                contactName: '',
                contactTitle: '',
                contactPhone: '',
                contactEmail: '',
                contactURL: '',
                notes: '',
                managerPhone: '',
                userID: tokenService.getUserFromToken()._id,
                jobID: this.props.job._id,
                active: true
            }
        })
    };

    handleChange = e => {
        const formData = { ...this.state.formData, [e.target.name]: e.target.value };
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
    };

    render() {
        return (
            <Card><br></br>
                <Form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
                    <Form.Group as={Col}>
                        <Form.Label>Interview Date</Form.Label>
                        <Form.Control
                            type="datetime-local"
                            name="interviewDate"
                            value={this.state.formData.interviewDate}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Interview Address</Form.Label>
                        <Form.Control
                            className="form-control"
                            name="interviewAddress"
                            value={this.state.formData.interviewAddress}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Confirmation Email</Form.Label>
                        <Form.Control
                            as="textarea"
                            className="form-control"
                            name="confirmationEmail"
                            value={this.state.formData.confirmationEmail}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Contact Name</Form.Label>
                        <Form.Control
                            className="form-control"
                            name="contactName"
                            value={this.state.formData.contactName}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Contact Title</Form.Label>
                        <Form.Control
                            className="form-control"
                            name="contactTitle"
                            value={this.state.formData.contactTitle}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Contact Phone Number (Digits Only)</Form.Label>
                        <Form.Control
                            className="form-control"
                            name="contactPhone"
                            value={this.state.formData.contactPhone}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Contact Email</Form.Label>
                        <Form.Control
                            className="form-control"
                            name="contactEmail"
                            value={this.state.formData.contactEmail}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Contact URL</Form.Label>
                        <Form.Control
                            className="form-control"
                            name="contactURL"
                            value={this.state.formData.contactURL}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Notes</Form.Label>
                        <Form.Control
                            as="textarea"
                            name="notes"
                            value={this.state.formData.notes}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                        <Button
                            type="submit"
                            className="btn"
                        disabled={this.state.invalidForm}
                        style={{margin: "15px"}}
                        >
                            ADD FOLLOW UP
                        </Button>
                </Form>
            </Card>
        );
    }
}
export default AddFollowUpPage;