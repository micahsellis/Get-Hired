import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EditFollowUpPage extends Component {
    state = {
        invalidForm: false,
        // Refer to PuppyListItem to see how puppy is being passed via the <Link>
        formData: this.props.location.state.followup
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
                <h1>Edit Follow Up</h1>
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
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Confirmation Email</label>
                        <input
                            className="form-control"
                            name="confirmationEmail"
                            value={this.state.formData.confirmationEmail}
                            onChange={this.handleChange}
                            required
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
                        className="btn btn-xs"
                        disabled={this.state.invalidForm}
                    >
                        SAVE CHANGES
         </button>&nbsp;&nbsp;
         <Link to='/'>CANCEL</Link>
                </form>
            </>
        );
    }
}
export default EditFollowUpPage;