import './style.css';
import myBackground from './assets/bg.jpg';
import homePage from '../modules/ui.js';

window.addEventListener('DOMContentLoaded', () => {
  const backGroundImg = document.getElementsByTagName('body');
  backGroundImg.src = myBackground;

  homePage();
});