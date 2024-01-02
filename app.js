import React from 'react';
import { createRoot } from 'react-dom/client';
import animals from './animals';

const container = document.getElementById('app');
const root = createRoot(container);

const title = '';
const showBackground = true; // Set to false to hide the background

const background = (
  <img
    className="background"
    alt="ocean"
    src="/images/ocean.jpg"
  />
);

const images = [];
for (const animal in animals) {
  images.push(
    <img
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role="button"
      onClick={displayFact}
    />
  );
}

const animalFacts = (
  <div>
    {showBackground && background}
    <div className="animals">{images}</div>
    <h1>{title === '' ? 'Click an animal for a fun fact!' : title}</h1>
    <p id="fact"></p>
  </div>
);

function displayFact(e) {
  const animal = e.target.alt;
  const randomIndex = Math.floor(Math.random() * animals[animal].facts.length);
  const fact = animals[animal].facts[randomIndex];
  document.getElementById('fact').innerHTML = fact;
}

root.render(animalFacts);

