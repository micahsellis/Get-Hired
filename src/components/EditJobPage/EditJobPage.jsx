import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EditJobPage extends Component {
    state = {
        invalidForm: false,
        // Refer to PuppyListItem to see how puppy is being passed via the <Link>
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
            <>
                <h1>Edit Job</h1>
                
                <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Job Listing URL</label>
                        <input
                            className="form-control"
                            name="jobURL"
                            value={this.state.formData.jobURL}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Job Title (required)</label>
                        <input
                            className="form-control"
                            name="title"
                            value={this.state.formData.title}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Company Name (required)</label>
                        <input
                            className="form-control"
                            name="company"
                            value={this.state.formData.company}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Company Address</label>
                        <input
                            className="form-control"
                            name="address"
                            value={this.state.formData.address}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone Number (Digits only)</label>
                        <input
                            className="form-control"
                            name="phone"
                            value={this.state.formData.phone}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Contact Email Address</label>
                        <input
                            className="form-control"
                            name="email"
                            value={this.state.formData.email}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Hiring Manager</label>
                        <input
                            className="form-control"
                            name="manager"
                            value={this.state.formData.manager}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Hiring Manager Title</label>
                        <input
                            className="form-control"
                            name="managerTitle"
                            value={this.state.formData.managerTitle}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Hiring Manager Email Address</label>
                        <input
                            className="form-control"
                            name="managerEmail"
                            value={this.state.formData.managerEmail}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Hiring Manager Phone Number</label>
                        <input
                            className="form-control"
                            name="managerPhone"
                            value={this.state.formData.managerPhone}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-xs"
                        disabled={this.state.invalidForm}
                    >
                        SAVE JOB CHANGES
         </button>&nbsp;&nbsp;
         <Link to='/'>CANCEL</Link>
                </form>
            </>
        );
    }
}
export default EditJobPage;