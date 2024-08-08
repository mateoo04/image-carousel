import './style.css';
import carImage from './car.jpg';
import cactusImage from './cactus.jpg';
import loveImage from './love.jpg';
import townImage from './town.jpg';
import asiaImage from './asia.jpg';

const frame = document.querySelector('.frame');
const picsContainer = document.querySelector('.pics');
const dotsContainer = document.querySelector('.navigation-dots');

const images = [
  { image: carImage, dot: null },
  { image: cactusImage, dot: null },
  { image: loveImage, dot: null },
  { image: townImage, dot: null },
  { image: asiaImage, dot: null },
];

//tracks value set to transformX
let transformValue = 0;

//makes sure image container is in format 16:9
const adjustImageHeight = function adjustImageContainerHeight() {
  frame.style.height = `${(frame.offsetWidth / 16) * 9}px`;
};

//listens for window resize to adjust image container height
window.addEventListener('resize', () => {
  adjustImageHeight();
});

//colors dot for currently displayed image
const colorDot = function colorNavigationDot(coloredIndex) {
  images.forEach((image) => {
    image.dot.classList.remove('fill');
  });

  images[coloredIndex].dot.classList.add('fill');
};

//changes displayed image
const switchImage = function switchDisplayedImage() {
  picsContainer.style.transform = `translateX(-${transformValue}%)`;

  colorDot(transformValue / 100);
};

//creates a navigation dot for an image
const addDot = function appendNavigationDot(index) {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  dotsContainer.append(dot);

  images[index].dot = dot;

  dot.addEventListener('click', () => {
    transformValue = index * 100;
    switchImage();
  });
};

const autoSwitchImage = function automaticallySwitchImage() {
  if (transformValue != 400) {
    transformValue += 100;
  } else {
    transformValue = 0;
  }

  switchImage();
};

let interval = setInterval(() => {
  autoSwitchImage();
}, 5000);

//click listener for forward button
const forwardButton = document.querySelector('.forward');
forwardButton.addEventListener('click', () => {
  if (transformValue != 400) {
    transformValue += 100;
  }

  switchImage();

  //   clearInterval(interval);
});

//click listener for back button
const backButton = document.querySelector('.back');
backButton.addEventListener('click', () => {
  if (transformValue != 0) {
    transformValue -= 100;
  }

  switchImage();

  //   clearInterval(interval);
});

//loading images at start
images.forEach((image, index) => {
  const imgElement = document.createElement('img');
  imgElement.src = image.image;

  picsContainer.append(imgElement);

  addDot(index);

  index += 1;
});

//filling first dot at start
colorDot(0);

//adjusts image container height at start
adjustImageHeight();
