import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./styles/BadgesList.css";
import { Link } from 'react-router-dom';
class BadgesList extends React.Component {
    render() {
        if (this.props.badges.length === 0) {
            return (
                <div>
                    <h3>
                        No Badges were found
                    </h3>
                    <Link className="btn btn-primary" to="/badges/new">
                        Create new Badge
                    </Link>
                </div>
            );
        }
        return (
            <div className="container">
                {this.props.badges.map((badge) => {
                    return (
                        <div className="card mb-3 p-1" key={badge.id}>
                            <div className="row">
                                <div className="col-3">
                                    <img
                                        className="card-img-top rounded-circle"
                                        src={badge.avatarUrl}
                                        alt=""
                                    />
                                </div>
                                <div className="col p-0">
                                    <div className="card-body pl-0">
                                        <h5 className="card-title">
                                            {badge.firstName} {badge.lastName}
                                        </h5>
                                        <p className="card-text">
                                            {badge.jobTitle}
                                        </p>
                                        <span>
                                            <FontAwesomeIcon
                                                icon={faTwitter}
                                                color="#00ACEE"
                                            />{" "}
                                            @{badge.twitter}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}
export default BadgesList;
