import React from "react";

import PageLoading from "../component/PageLoading";
import PageError from "../component/PageError";
import api from "../api";
import BadgeDetails from "./BadgeDetails";

class BadgeDetailsContainer extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined
    };

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        this.state.loading = true;
        this.state.error = null;

        try {
            const data = await api.badges.read(this.props.match.params.badgeId);
            this.setState({ loading: false, data: data });
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    };

    render() {
        if (this.state.loading) {
            return <PageLoading />;
        }

        if (this.state.error) {
            return <PageError error={this.state.error} />;
        }
        return <BadgeDetails badge={this.state.data} />;
    }
}

export default BadgeDetailsContainer;
