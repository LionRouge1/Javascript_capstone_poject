import './style.css';
import Icon from './assest/logo1.png';
import getData from './modules/homePage.js';
 
const mylogo = new Image();
mylogo.src = Icon;

const logo = document.querySelector('.logo');
logo.appendChild(mylogo);

