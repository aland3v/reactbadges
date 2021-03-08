/*const element = document.createElement('h1');
element.innerText = 'Hello, Platzi Badges';
const container = document.getElementById('app');
container.appendChild(element);*/

import React from "react";
import ReactDOM from "react-dom";
import BadgeNew from "./pages/BadgeNew";
import "bootstrap/dist/css/bootstrap.min.css";
import "./global.css";

const container = document.getElementById("app");

ReactDOM.render(<BadgeNew />, container); // hay que darle un <elemento/>
