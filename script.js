'use strict';

document.querySelectorAll('.ice-pop-container img').forEach(img => {
  img.addEventListener('click', () => {
    img.classList.add('fuwafuwa');
    setTimeout(() => {
      img.classList.remove('fuwafuwa');
    }, 3000); // 3秒後に外す（animationの回数に合わせる）
  });
});