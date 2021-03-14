import React from "react";

import PageLoading from "../component/PageLoading";
import PageError from "../component/PageError";
import api from "../api";
import BadgeDetails from "./BadgeDetails";

class BadgeDetailsContainer extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined,
        modalIsOpen: false
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

    handleOpenModal = e => {
        this.setState({ modalIsOpen: true });
    }

    handleCloseModal = e => {
        this.setState({ modalIsOpen: false })
    }
    handleDeleteBadge = async e => {
        this.setState({ loading: true, error: null });
        try {
            await api.badges.remove(
                this.props.match.params.badgeId
            );
            this.setState({ loading: false })
            this.props.history.push('/badges')
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }

    render() {
        if (this.state.loading) {
            return <PageLoading />;
        }

        if (this.state.error) {
            return <PageError error={this.state.error} />;
        }
        return <BadgeDetails
            modalIsOpen={this.state.modalIsOpen}
            onOpenModal={this.handleOpenModal}
            onCloseModal={this.handleCloseModal}
            onDeleteBadge={this.handleDeleteBadge}
            badge={this.state.data} />;
    }
}

export default BadgeDetailsContainer;
