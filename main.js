"use strict";

const colors = ['#b3ffff', '#cc99ff', '#ffaa80', '#99ffcc', '#ffff80', '#ff9999'];

// const squares = [];
// const max_squares = 65;

const DOM = {
  container: document.querySelector('.container'),
};

const animateSquare = function (square) {
  const delay = getRandomVal(0, 3000);
  const duration = getRandomVal(2500, 6000);

  square.style.transform = `rotate(${getRandomVal(0, 75)}deg)`;
  square.style.animationName = 'squareAnim';
  square.style.animationDuration = duration + 'ms';
  square.style.animationDelay = delay + 'ms';
  square.style.transform = 'scale(0)';

  setTimeout(() => {
    square.remove();
  }, duration)

}

const getRandomVal = (min = 0, max = 50) => Math.trunc(Math.random() * (max - min) + min);

const createSquare = function () {
  const square = document.createElement('span');
  square.classList = 'square';

  const size = getRandomVal(10, 40);
  const x = getRandomVal(0, window.innerWidth);
  const y = getRandomVal(0, window.innerHeight);
  const color = colors[getRandomVal(0, colors.length)];

  square.style.width = `${size}px`;
  square.style.height = `${size}px`;
  square.style.left = `${x}px`;
  square.style.top = `${y}px`;
  square.style.background = `${color}`;

  animateSquare(square);

  DOM.container.appendChild(square);
  // squares.push(square);
}

setInterval(createSquare, 50)