import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Form, Col, Button, Card} from 'react-bootstrap'

class EditJobPage extends Component {
    state = {
        invalidForm: false,
        formData: this.props.location.state.job
    };

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleUpdateJob(this.state.formData);
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
            <Card>
                <h1 className="text-center" style={{marginTop: "10px"}}>Edit Job</h1>
                
                <Form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit} style={{margin: "10px"}}>
                    <Form.Group>
                        <Form.Label>Job Listing URL</Form.Label>
                        <Form.Control
                            className="form-control"
                            type="text"
                            name="jobURL"
                            value={this.state.formData.jobURL}
                            onChange={this.handleChange}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col} md="6">
                            <Form.Label>Job Title (required)</Form.Label>
                            <input
                                className="form-control"
                                name="title"
                                value={this.state.formData.title}
                                onChange={this.handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="6">
                            <Form.Label>Company Name (required)</Form.Label>
                            <input
                                className="form-control"
                                name="company"
                                value={this.state.formData.company}
                                onChange={this.handleChange}
                                required
                            />
                        </Form.Group>
                    </Form.Row>
                    <Form.Group>
                        <Form.Label>Company Address</Form.Label>
                        <input
                            className="form-control"
                            name="address"
                            value={this.state.formData.address}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col} md="6">
                            <Form.Label>Phone Number (Digits only)</Form.Label>
                            <input
                                className="form-control"
                                name="phone"
                                value={this.state.formData.phone}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="6">
                            <Form.Label>Contact Email Address</Form.Label>
                            <input
                                className="form-control"
                                name="email"
                                value={this.state.formData.email}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="6">
                            <Form.Label>Hiring Manager</Form.Label>
                            <input
                                className="form-control"
                                name="manager"
                                value={this.state.formData.manager}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="6">
                            <Form.Label>Hiring Manager Title</Form.Label>
                            <input
                                className="form-control"
                                name="managerTitle"
                                value={this.state.formData.managerTitle}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="6">
                            <Form.Label>Hiring Manager Email Address</Form.Label>
                            <input
                                className="form-control"
                                name="managerEmail"
                                value={this.state.formData.managerEmail}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="6">
                            <Form.Label>Hiring Manager Phone Number</Form.Label>
                            <input
                                className="form-control"
                                name="managerPhone"
                                value={this.state.formData.managerPhone}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                    </Form.Row>
                    <Button
                        type="submit"
                        variant="success"
                        disabled={this.state.invalidForm}
                    >
                        SAVE JOB CHANGES
         </Button>&nbsp;&nbsp;
         <Button as={Link} to='/'>CANCEL</Button>
                </Form>
            </Card>
        );
    }
}
export default EditJobPage;