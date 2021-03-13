import React from "react";
import "./style/BadgeEdit.css";
import header from "../images/platziconf-logo.svg";
import Badge from "../component/Badge";
import BadgeForm from "../component/BadgeForm";
import api from "../api";
import PageLoading from "../component/PageLoading";

class BadgeEdit extends React.Component {
    state = {
        loading: true,
        error: null,
        form: {
            firstName: "",
            lastName: "",
            email: "",
            jobTitle: "",
            twitter: ""
        }
    };

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async (e) => {
        this.setState({ loading: true, error: null });
        try {
            const data = await api.badges.read(this.props.match.params.badgeId);
            this.setState({ loading: false, form: data });
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    };

    handleChange = (e) => {
        // const nextForm = this.state.form;
        // nextForm[e.target.name] = e.target.value;
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value //añadimos o sobreescribimos
            }
        });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({ loading: true, error: null });
        try {
            await api.badges.update(
                this.props.match.params.badgeId,
                this.state.form
            );
            this.setState({ loading: false });
            this.props.history.push("/badges");
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    };

    render() {
        if (this.state.loading) {
            return <PageLoading />;
        }
        return (
            <React.Fragment>
                <div className="BadgeEdit__hero">
                    <img
                        src={header}
                        className="img-fluid BadgeEdit__hero-image"
                        alt="Logo"
                    />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName={
                                    this.state.form.firstName || "FIRST_NAME"
                                }
                                lastName={
                                    this.state.form.lastName || "LAST_NAME"
                                }
                                twitter={this.state.form.twitter || "twitter"}
                                jobTitle={
                                    this.state.form.jobTitle || "JOB_TITLE"
                                }
                                email={this.state.form.email || "EMAIL"}
                                avatarUrl="https://www.gravatar.com/avatar?d=identicon"
                            />
                        </div>
                        <div className="col-6">
                            <h1>Edit Attendant</h1>
                            <BadgeForm
                                onSubmit={this.handleSubmit}
                                onChange={this.handleChange}
                                formValues={this.state.form}
                                error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BadgeEdit;
