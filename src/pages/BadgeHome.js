import React from "react";
import Astronauts from "../images/astronauts.svg";
import Stars from "../images/stars.svg";
import HeroText from "../component/HeroText";
import "./style/BadgeHome.css";

class BadgeHome extends React.Component {
    render() {
        return (
            <div className="container-fluid badge-home">
                <div className="row text-center h-100">
                    <div className="col-4 offset-1 my-auto">
                        <HeroText />
                    </div>
                    <div className="col-6 my-auto">
                        <img src={Astronauts} alt="" />
                    </div>
                </div>
            </div>
        );
    }
}

export default BadgeHome;
