import React from "react";
import errorLogo from "../images/404error.svg";
import "./style/NotFound.css";

function NotFound() {
    return (
        <React.Fragment>
            <div className="container-fluid container-notfound m-0 py-4">
                <div className="row text-center">
                    <div className="col-12">
                        <h1 className="title-notfound">
                            Oops... This page was not found
                        </h1>
                    </div>
                    <div className="col-12">
                        <img src={errorLogo} alt="" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default NotFound;
