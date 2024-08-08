import './style.css';
import carImage from './car.jpg';
import cactusImage from './cactus.jpg';
import loveImage from './love.jpg';
import townImage from './town.jpg';
import asiaImage from './asia.jpg';

const frame = document.querySelector('.frame');
const picsContainer = document.querySelector('.pics');

const images = [carImage, cactusImage, loveImage, townImage, asiaImage];

images.forEach((image) => {
  const imgElement = document.createElement('img');
  imgElement.src = image;

  picsContainer.append(imgElement);
});

let transformValue = 0;

const forwardButton = document.querySelector('.forward');
forwardButton.addEventListener('click', () => {
  if (transformValue != 400) {
    transformValue += 100;
  }
  console.log(transformValue);
  picsContainer.style.transform = `translateX(-${transformValue}%)`;
});

const backButton = document.querySelector('.back');
backButton.addEventListener('click', () => {
  if (transformValue != 0) {
    transformValue -= 100;
  }
  console.log(transformValue);

  picsContainer.style.transform = `translateX(-${transformValue}%)`;
});
