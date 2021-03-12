import React from "react";
import pLogo from "../images/platziconf-logo.svg";
import "./styles/HeroText.css";
import { Link } from 'react-router-dom';
class HeroText extends React.Component {
    render() {
        return (
            <div className="jumbotron-transparent container__hero-text text-center">
                <div className="">
                    <img src={pLogo} alt="" />
                </div>
                <h1 className="mt-4 h3">PRINT YOUR BADGES</h1>
                <p className="text-left">
                    The easiest way to manage your conference
                </p>
                <Link className="btn btn-primary" to="/badges">Start Now</Link>
            </div>
        );
    }
}

export default HeroText;
