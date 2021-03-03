/*const element = document.createElement('h1');
element.innerText = 'Hello, Platzi Badges';
const container = document.getElementById('app');
container.appendChild(element);*/

import React from 'react';
import ReactDOM from 'react-dom';

const container = document.getElementById('app');

const element = <h1>Hello, Platzi Badges</h1>;
ReactDOM.render(element, container);
