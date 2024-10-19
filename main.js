// import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

const noBtn = document.querySelector('.joke__btn.no');
const yesBtn = document.querySelector('.joke__btn.yes');

console.log(noBtn);

noBtn.addEventListener("mouseover", function(event) {

  const randomX = Math.floor(Math.random() * (window.innerWidth - noBtn.offsetWidth));
  const randomY = Math.floor(Math.random() * (window.innerHeight - noBtn.offsetHeight));

  // Применяем новые позиции к элементу
  noBtn.style.position = "absolute"; // Делаем элемент абсолютным, чтобы можно было изменить его координаты
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
});

yesBtn.addEventListener('click', () => {
  document.querySelector('.joke').classList.add('unactive')
  document.querySelector('.joke__active').classList.add('active')
})

