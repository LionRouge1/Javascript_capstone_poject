import './style.css';
import Icon from './assest/logo1.png';
 
const mylogo = new Image();
mylogo.src = Icon;

const logo = document.querySelector('.logo');
logo.appendChild(mylogo);