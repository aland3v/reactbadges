import React from "react";
import confLogo from "../images/platziconf-logo.svg";
import "./style/BadgeDetails.css";
import Badge from "../component/Badge";
import DeleteBadgeModal from "../component/DeleteBadgeModal";
import { Link } from "react-router-dom";

/**
 * Custom hook
 */
function useIncreaseCount(max) {
    const [count, setCount] = React.useState(0);
    if (count > max) {
        setCount(0);
    }
    return [count, setCount];
}

function BadgeDetails(props) {
    const [count, setCount] = useIncreaseCount(4);
    const badge = props.badge;
    return (
        <div>
            <div className="BadgeDetails__hero">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={confLogo} alt="Logo de la conferencia" />
                        </div>
                        <div className="col-6 BadgeDetails__hero-attendant-name">
                            <h1>
                                {badge.firstName} {badge.lastName}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Badge
                            firstName={badge.firstName}
                            lastName={badge.lastName}
                            email={badge.email}
                            twitter={badge.twitter}
                            jobTitle={badge.jobTitle}
                        />
                    </div>
                    <div className="col">
                        <h2>Actions</h2>
                        <div>
                            <div>
                                <button onClick={() => setCount(count + 1)} className="btn btn-primary mr-4">
                                    Increase Count: {count}
                                </button>
                                <Link
                                    className="btn btn-primary mb-4"
                                    to={`/badges/${badge.id}/edit`}>
                                    Edit
                                </Link>
                            </div>
                            <div>
                                <button onClick={props.onOpenModal} className="btn btn-danger">
                                    Delete
                                </button>
                                <DeleteBadgeModal
                                    onDeleteBadge={props.onDeleteBadge}
                                    onClose={props.onCloseModal}
                                    isOpen={props.modalIsOpen} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BadgeDetails;
