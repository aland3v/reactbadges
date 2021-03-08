/*const element = document.createElement('h1');
element.innerText = 'Hello, Platzi Badges';
const container = document.getElementById('app');
container.appendChild(element);*/

import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./global.css";
import App from "./component/App";
const container = document.getElementById("app");

ReactDOM.render(<App />, container); // hay que darle un <elemento/>
