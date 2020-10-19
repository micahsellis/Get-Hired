import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Col, Card } from 'react-bootstrap';
import './EditFollowUp.css'

class EditFollowUpPage extends Component {
    state = {
        invalidForm: false,
        formData: this.props.location.state.followUp
    };

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleUpdateFollowUp(this.state.formData);
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
            <>
                <Card>
                <h1 className="text-center">Edit Follow Up</h1>
                <Form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
                    <Form.Group as={Col}>
                        <Form.Label>Interview Address</Form.Label>
                        <Form.Control
                            className="form-control"
                            name="interviewAddress"
                            value={this.state.formData.interviewAddress}
                            onChange={this.handleChange}
                        />
                        </Form.Group>
                        <Form.Row className="row">
                    <Form.Group as={Col} md="6">
                        <Form.Label>Interview Date</Form.Label>
                        <Form.Control
                            type="datetime-local"
                            name="interviewDate"
                            value={this.state.formData.interviewDate}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="6">
                        <Form.Label>Confirmation Email</Form.Label>
                        <Form.Control
                            as="textarea"
                            className="form-control"
                            name="confirmationEmail"
                            value={this.state.formData.confirmationEmail}
                            onChange={this.handleChange}
                        />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row className="row">
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
                        </Form.Row>
                    <Form.Row className="row">
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
                    </Form.Row>
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
                            className="form-control"
                            name="notes"
                            value={this.state.formData.notes}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                        <Button
                        className="btns"
                        type="submit"
                        variant="success"
                        disabled={this.state.invalidForm}
                    >
                        SAVE CHANGES
                    </Button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button className="btns" as={Link} variant="warning" to='/jobs'>CANCEL</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button
                            className="btns"
                        onClick={() => this.props.handleDeleteFollowUp(this.props.followUp._id)}
                    >
                        DELETE
                    </Button>
                    </Form>
                </Card>
            </>
        );
    }
}
export default EditFollowUpPage;