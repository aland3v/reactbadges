import React from "react";

class BadgeForm extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        jobTitle: "Software Engineer",
        twitter: ""
    };

    handleChange = (e) => {
        /* console.log({
            name: e.target.name,
            value: e.target.value
        }); */
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleClick = (e) => {
        console.log("Button was clicked!");
        console.log(this.state);
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form was submitted");
    };

    render() {
        return (
            <div>
                <h1>New Attendant</h1>
                <form action="" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="">First Name</label>
                        <input
                            onChange={this.handleChange}
                            type="text"
                            name="firstName"
                            className="form-control"
                            value={this.state.firstName}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Last Name</label>
                        <input
                            onChange={this.handleChange}
                            type="text"
                            name="lastName"
                            className="form-control"
                            value={this.state.lastName}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input
                            onChange={this.handleChange}
                            type="email"
                            name="email"
                            className="form-control"
                            value={this.state.email}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Job Title</label>
                        <input
                            onChange={this.handleChange}
                            type="text"
                            name="jobTitle"
                            className="form-control"
                            value={this.state.jobTitle}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Twitter</label>
                        <input
                            onChange={this.handleChange}
                            type="text"
                            name="twitter"
                            className="form-control"
                            value={this.state.twitter}
                        />
                    </div>
                    <div className="form-group">
                        <button
                            onClick={this.handleClick}
                            className="btn btn-primary">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default BadgeForm;
