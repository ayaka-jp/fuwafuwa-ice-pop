'use strict';

document.querySelectorAll('.ice-pop-container img').forEach(img => {
  img.addEventListener('click', () => {
    img.classList.add('fuwafuwa');
    setTimeout(() => {
      img.classList.remove('fuwafuwa');
    }, 3000); // 3秒後に外す（animationの回数に合わせる）
  });
});

  // モバイル向けvh単位の修正
  function setVH() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  window.addEventListener('resize', setVH);
  window.addEventListener('load', setVH);