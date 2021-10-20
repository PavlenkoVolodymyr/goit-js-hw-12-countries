const BASE_URL = 'https://restcountries.com/v2';

async function fetchCountryByName(countrieName) {
  const response = await fetch(`${BASE_URL}/name/${countrieName}`);
  return await response.json();
}

export default { fetchCountryByName };
