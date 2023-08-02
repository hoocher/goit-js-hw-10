import axios from 'axios';

export class CatApi {
  #BASE_URL = 'https://api.thecatapi.com/v1/breeds';
  #API_KEY =
    'live_rJvH5AfveveioDcvWcCSIHVj6pOtXlqHdQMYWgV9S3LpaQdmNUAeDfB72E0CTxR1';

  fetchBreeds() {
    return axios.get(`${this.#BASE_URL}`);
  }

  fetchCatByBreed(event) {
    let URL = `https://api.thecatapi.com/v1/images/search?breed_ids=${
      event.target.value
    }&api_key=${this.#API_KEY}`;

    return axios.get(`${URL}`);
  }

  // fetchBreeds() {

  // return fetch(`${this.#BASE_URL}`).then(response => {
  //   if (!response.ok) {
  //     throw new Error(response.status);
  //   }
  //   return response.json();
  // });
  // }

  // fetchCatByBreed(event) {
  //   let URL = `https://api.thecatapi.com/v1/images/search?breed_ids=${
  //     event.target.value
  //   }&api_key=${this.#API_KEY}`;
  //   return fetch(`${URL}`).then(response => {
  //     if (!response.ok) {
  //       throw new Error(response.status);
  //     }
  //     return response.json();
  //   });
  // }
}
