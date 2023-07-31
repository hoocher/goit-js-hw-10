// import { fetchBreeds } from './cat-api';
// import { fetchCatByBreed } from './cat-api';

import { CatApi } from './cat-api1';

const selectEl = document.querySelector('.breed-select');
const catInfoEl = document.querySelector('.cat-info');
const loaderEl = document.querySelector('.loader');
const errorEl = document.querySelector('.error');

selectEl.classList.add('is-hidden');
errorEl.classList.add('is-hidden');

// result = null;

const breeds = new CatApi();

breeds.fetchBreeds().then(data => {
  let newMurkup = '';
  data.forEach(element => {
    let { id, name } = element;
    newMurkup += `<option value="${id}">${name}</option>`;
  });
  selectEl.innerHTML = `${newMurkup}`;
  selectEl.classList.remove('is-hidden');
});

function fetchCatByBreed(id) {
  catInfoEl.innerHTML = '';
  breeds.fetchCatByBreed(id).then(data => {
    const breeds = data[0];
    let newMarkup = '';
    newMarkup = `<img src="${data[0].url}" alt="" height="600">
      <h2>${breeds.breeds[0].name}</h2>
      <p>${breeds.breeds[0].description}</p>
      <p>${breeds.breeds[0].temperament}</p>`;

    catInfoEl.insertAdjacentHTML('beforeend', newMarkup);
    loaderEl.classList.add('is-hidden');
  });
}

selectEl.addEventListener('change', fetchCatByBreed);

// console.log(result);
// fetchBreeds();

// selectEl.addEventListener('change', fetchCatByBreed);
