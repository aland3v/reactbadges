/*const element = document.createElement('h1');
element.innerText = 'Hello, Platzi Badges';
const container = document.getElementById('app');
container.appendChild(element);*/

import React from 'react';
import ReactDOM from 'react-dom';
import Badge from './component/Badge';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css';
const container = document.getElementById('app');

ReactDOM.render(<Badge 
                firstName="Alandelon" 
                lastName="Snoopy" 
                avatarUrl="https://www.gravatar.com/avatar?d=identicon" 
                jobTitle="Senior Fullstack Developer" 
                twitter="aland3v" 
                />, 
                container); // hay que darle un <elemento/>
