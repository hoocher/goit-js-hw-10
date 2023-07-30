import { fetchBreeds } from './cat-api';
import { fetchCatByBreed } from './cat-api';

const selectEl = document.querySelector('.breed-select');

fetchBreeds();

selectEl.addEventListener('change', fetchCatByBreed);
