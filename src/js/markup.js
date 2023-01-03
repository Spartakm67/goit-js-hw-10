const oneCountry = document.querySelector('.country-info');
const manyCountries = document.querySelector('.country-list');



function clearMarkup() {
    // input.reset();
    oneCountry.innerHTML = '';
    manyCountries.innerHTML = '';
};

function markupOneCountry(data) {
  const countryData = data[0];

  const flag = countryData.flags.svg;
  const name = countryData.name.official;
  const capital = countryData.capital.join(', ');
  const population = countryData.population.toLocaleString();
  const languages = Object.values(countryData.languages).join(', ');

  const oneCountryMarkup = `<div><img src="${flag}" alt="${name} flag" width="40" height=auto style="margin-right: 10px"><b style="font-size: 24px">${name}</b></div>
    <div><b>Capital: </b><span>${capital}</span></div>
    <div><b>Population: </b><span>${population}</span></div>
    <div><b>Languages: </b><span>${languages}</span></div>`;
  oneCountry.insertAdjacentHTML('beforeend', oneCountryMarkup);
}

function markupManyCountries(data) {
  const manyCountriesMarkup = data
    .map(
      ({ flags, name }) =>
        `<li><img src="${flags.svg}" alt="flag ${name.official}" width="40" height=auto style="margin-right: 10px"><span>${name.official}</span></li>`
    )
    .join('');

  manyCountries.insertAdjacentHTML('beforeend', manyCountriesMarkup);
}

export default { clearMarkup, markupOneCountry, markupManyCountries };