const GET_BREEDS_URL = 'https://api.thecatapi.com/v1/breeds';
const selectEl = document.querySelector('.breed-select');
const catInfoEl = document.querySelector('.cat-info');
const loaderEl = document.querySelector('.loader');
const errorEl = document.querySelector('.error');
const apiKey =
  'live_rJvH5AfveveioDcvWcCSIHVj6pOtXlqHdQMYWgV9S3LpaQdmNUAeDfB72E0CTxR1';

selectEl.classList.add('is-hidden');
errorEl.classList.add('is-hidden');

export function fetchBreeds() {
  fetch(`${GET_BREEDS_URL}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      selectEl.classList.remove('is-hidden');
      let newMurkup = '';
      data.forEach(element => {
        let { id, name } = element;
        newMurkup += `<option value="${id}">${name}</option>`;
      });
      selectEl.insertAdjacentHTML('beforeend', newMurkup);
      loaderEl.classList.add('is-hidden');
    })
    .catch(console.warn);
}

export function fetchCatByBreed(event) {
  let URL = `https://api.thecatapi.com/v1/images/search?breed_ids=${event.target.value}&api_key=${apiKey}`;
  catInfoEl.innerHTML = '';
  loaderEl.classList.remove('is-hidden');
  errorEl.classList.add('is-hidden');

  fetch(`${URL}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      loaderEl.classList.add('is-hidden');
      let newMarkup = '';
      let { url, breeds } = data[0];
      let { name, temperament, description } = breeds[0];
      newMarkup = `<img src="${url}" alt="" height="600">
      <h2>${name}</h2>
      <p>${description}</p>
      <p>${temperament}</p>`;
      catInfoEl.insertAdjacentHTML('beforeend', newMarkup);
    })
    .catch(Error => {
      loaderEl.classList.add('is-hidden');
      errorEl.classList.remove('is-hidden');
    });
}
