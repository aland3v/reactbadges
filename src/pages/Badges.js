import React from "react";
import "./style/Badges.css";
import confLogo from "../images/badge-header.svg";
import BadgesList from "../component/BadgesList";
import { Link } from "react-router-dom";
import api from "../api";
import PageLoading from "../component/PageLoading";
import PageError from "../component/PageError";
import MiniLoader from "../component/MiniLoader";
class Badges extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined
    };

    componentDidMount() {
        this.fetchData();
        this.intervalId = setInterval(this.fetchData, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
    fetchData = async () => {
        this.setState({ loading: true, error: null });
        try {
            const data = await api.badges.list();
            this.setState({ loading: false, data: data });
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    };

    render() {
        if (this.state.loading === true && !this.state.data) {
            return <PageLoading />;
        }
        if (this.state.error) {
            return <PageError error={this.state.error} />;
        }
        return (
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img
                                className="Badges__conf-logo"
                                src={confLogo}
                                alt="Conf Logo"
                            />
                        </div>
                    </div>
                </div>
                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">
                            New Badge
                        </Link>
                    </div>
                    <div className="badges__list">
                        <div className="badges__container">
                            <BadgesList badges={this.state.data} />
                        </div>
                    </div>
                    {this.state.loading && <MiniLoader />}
                </div>
            </React.Fragment>
        );
    }
}

export default Badges;
