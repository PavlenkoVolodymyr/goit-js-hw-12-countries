const BASE_URL = 'https://restcountries.com/v2';
// https://restcountries.com/v2/name/

function fetchCountryByName(countrieName) {
  return fetch(`${BASE_URL}/name/${countrieName}`).then(response => {
    return response.json();
  });
}

export default { fetchCountryByName };
