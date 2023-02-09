import './style.css';
import myBackground from './assets/bg.jpg';
import homePage from '../modules/ui.js';
import comments from '../modules/movieDetails';

window.addEventListener('DOMContentLoaded', () => {
  const backGroundImg = document.getElementsByTagName('body');
  backGroundImg.src = myBackground;

  homePage();

  const commentBtn = document.querySelectorAll('.comments');
  commentBtn.forEach((Btn) => {
    Btn.addEventListener('click', () => {
        console.log(comments(Btn.id));
    })
  })
});

const btn = document.querySelectorAll('button')
btn.forEach((but) => {
  but.addEventListener('click', () => {
    console.log('Clicked')
  })
})

