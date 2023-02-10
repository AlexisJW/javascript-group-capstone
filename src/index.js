import './style.css';
import myBackground from './assets/bg.jpg';
import homePage from '../modules/ui.js';
import addLike from '../modules/addLikes.js';
import itemsCounter from '../modules/itemsCounter.js';
import showComments from '../modules/showComments';
// import createApiId from '../modules/involveApi.js';

window.addEventListener('DOMContentLoaded', () => {
  const backGroundImg = document.getElementsByTagName('body');
  backGroundImg.src = myBackground;

  homePage();
  // createApiId();
});

document.querySelector('#cards-container').addEventListener('DOMSubtreeModified', () => {
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    // If button class contains like
    if (button.classList.contains('like')) {
      button.onclick = () => {
        addLike(button.id);
      };
    }
    else {
      button.onclick = (e) => {
        showComments(e.target.id);
      }
    }
  });
  itemsCounter();
});
