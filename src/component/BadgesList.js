import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./styles/BadgesList.css";
import { Link } from "react-router-dom";
import Gravatar from "./Gravatar";

function useSearchBadges(badges) {
    const [query, setQuery] = React.useState("");
    const [filteredBadges, setFilteredBadges] = React.useState(badges);

    /**
     * React hoock para almacenar en memoria resultados calculados
     * y no recalcular
     */
    React.useMemo(() => {
        const result = badges.filter((badge) =>
            `${badge.firstName} ${badge.lastName}`
                .toLowerCase()
                .includes(query.toLowerCase())
        );
        setFilteredBadges(result);
    }, [badges, query]);

    return { query, setQuery, filteredBadges };
}

function BadgesList(props) {
    const badges = props.badges;
    const { query, setQuery, filteredBadges } = useSearchBadges(badges);
    if (filteredBadges.length === 0) {
        return (
            <div>
                <div className="form-group">
                    <label>Filter Badges</label>
                    <input
                        type="text"
                        className="form-control"
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value);
                        }}
                    />
                </div>
                <h3>No Badges were found</h3>
                <Link className="btn btn-primary" to="/badges/new">
                    Create new Badge
                </Link>
            </div>
        );
    }
    return (
        <div className="container">
            <div className="form-group">
                <label>Filter Badges</label>
                <input
                    type="text"
                    className="form-control"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                    }}
                />
            </div>
            {filteredBadges.map((badge) => {
                return (
                    <div className="card mb-3 p-1" key={badge.id}>
                        <Link
                            className="text-reset text-decoration-none"
                            to={`/badges/${badge.id}`}>
                            <div className="row">
                                <div className="col-3">
                                    <Gravatar
                                        className="card-img-top rounded-circle"
                                        email={badge.email}
                                        alt="Avatar"
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
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}
export default BadgesList;
