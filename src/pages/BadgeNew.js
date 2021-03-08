import React from "react";
import Navbar from "../component/Navbar";
import "./style/BadgeNew.css";
import header from "../images/badge-header.svg";
import Badge from "../component/Badge";
import BadgeForm from "../component/BadgeForm";

class BadgeNew extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img src={header} className="img-fluid" alt="Logo" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName="Alan"
                                lastName="Quispe"
                                twitter="Aland3v"
                                jobtitle="FrontEnd Engineer"
                                avatarUrl="https://www.gravatar.com/avatar?d=identicon"
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BadgeNew;
