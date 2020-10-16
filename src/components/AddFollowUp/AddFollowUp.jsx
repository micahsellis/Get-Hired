import React, { Component } from 'react';
import tokenService from '../../utils/tokenService'

class AddJobPage extends Component {
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
            userID: tokenService.getUserFromToken(),
            jobId: this.props.jobID,
            active: true
        }
    };

    formRef = React.createRef();


    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddFollowUp(this.state.formData);
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
                <h1>Add A Follow Up Action</h1>
                <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Interview Date</label>
                        <input
                            className="form-control"
                            name="interviewDate"
                            value={this.state.formData.interviewDate}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Interview Address</label>
                        <input
                            className="form-control"
                            name="interviewAddress"
                            value={this.state.formData.interviewAddress}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Confirmation Email</label>
                        <input
                            className="form-control"
                            name="confirmationEmail"
                            value={this.state.formData.confirmationEmail}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Contact Name</label>
                        <input
                            className="form-control"
                            name="contactName"
                            value={this.state.formData.contactName}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Contact Title (Digits only)</label>
                        <input
                            className="form-control"
                            name="contactTitle"
                            value={this.state.formData.contactTitle}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Contact Phone Number</label>
                        <input
                            className="form-control"
                            name="contactPhone"
                            value={this.state.formData.contactPhone}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Contact Email</label>
                        <input
                            className="form-control"
                            name="contactEmail"
                            value={this.state.formData.contactEmail}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Contact URL</label>
                        <input
                            className="form-control"
                            name="contactURL"
                            value={this.state.formData.contactURL}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Notes</label>
                        <input
                            className="form-control"
                            name="notes"
                            value={this.state.formData.notes}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn"
                        disabled={this.state.invalidForm}
                    >
                        ADD JOB
                    </button>
                </form>
            </>
        );
    }
}
export default AddJobPage;