// Есть файл fetchCountries.js с дефолтным экспортом функции fetchCountries(searchQuery), возвращающей промис с массивом стран, результат запроса к API.
console.log('fetchCountries.js');
import API from './api-service.js';
import getRefs from './get-refs';

import countriesTpl from '../templates/countries.hbs';
import debounce from 'lodash.debounce';

import { alert, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';

defaultModules.set(PNotifyMobile, {});

console.log(debounce);
const refs = getRefs();

refs.searchForm.addEventListener('input', debounce(onSearch, 500));

function onSearch(event) {
  // event.preventDefault();
  const input = event.target;

  const searchQuery = input.value;

  API.fetchCountryByName(searchQuery)
    .then(renderCountryCard)
    .catch(error => onFetchError(error));
}

function renderCountryCard(countres) {
  clearCard();
  if (countres.length > 10) {
    alert({
      text: `Too many matches found - ${countres.length} matches. Please enter a more specific query!`,
      delay: 1500,
    });
  } else if (countres.length > 1 && countres.length <= 10) {
    makeCountriesList(countres);
    // } else if (countres.status !== undefined && countres.status === 404) {
    //   alert('No countries found. ');
  } else if (countres.length === 1) {
    const markup = countriesTpl(countres);
    refs.cardContainer.innerHTML = markup;
  } else {
    throw new Error();
  }
}

function onFetchError(error) {
  // alert('Введены неправильные данные ');
  alert({
    text: 'Введены неправильные данные',
    delay: 1500,
  });
}

function makeCountriesList(countres) {
  let listMarkup = countres.map(country => {
    return `<li>${country.name}</li>`;
  });
  refs.list.innerHTML = listMarkup;
}

function clearCard() {
  refs.cardContainer.innerHTML = '';
  refs.list.innerHTML = '';
}

// function fetchCountryByName(countryName) {
//   const url = `https://restcountries.com/v2/name/${countryName}`;

//   return fetch(url).then(response => {
//     return response.json();
//   });
// }
