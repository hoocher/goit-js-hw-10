import { CatApi } from './cat-api1';

const selectEl = document.querySelector('.breed-select');
const catInfoEl = document.querySelector('.cat-info');
const loaderEl = document.querySelector('.loader');
const errorEl = document.querySelector('.error');

selectEl.classList.add('is-hidden');
errorEl.classList.add('is-hidden');

const catApiNew = new CatApi();

catApiNew
  .fetchBreeds()
  .then(({ data }) => {
    let newMurkup = '';
    data.forEach(element => {
      let { id, name } = element;
      newMurkup += `<option value="${id}">${name}</option>`;
    });
    selectEl.innerHTML = `${newMurkup}`;
    selectEl.classList.remove('is-hidden');
    loaderEl.classList.add('is-hidden');
  })
  .catch(error => {
    errorEl.classList.remove('is-hidden');
  });

function fetchCatByBreed(id) {
  loaderEl.classList.remove('is-hidden');
  catInfoEl.innerHTML = '';
  catApiNew
    .fetchCatByBreed(id)
    .then(({ data }) => {
      const breeds = data[0];
      let newMarkup = '';
      newMarkup = `<img class="image" src="${data[0].url}" alt="" height="600">
      <h2 class="title">${breeds.breeds[0].name}</h2>
      <p class="description">${breeds.breeds[0].description}</p>
      <p class="temperament">${breeds.breeds[0].temperament}</p>`;

      catInfoEl.insertAdjacentHTML('beforeend', newMarkup);
      loaderEl.classList.add('is-hidden');
    })
    .catch(error => {
      loaderEl.classList.add('is-hidden');
      errorEl.classList.remove('is-hidden');
    });
}

selectEl.addEventListener('change', fetchCatByBreed);
