import Notiflix from 'notiflix';

function fetchCountries(name) {
     
  return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`).then(
        response => {
            if (response.status === 404) {
                throw new Error();
            } else return response.json();
    }
  ).catch(() => Notiflix.Notify.failure('Oops, there is no country with that name'));
};

function onFetchError(error) {
    Notiflix.Notify.failure('Oops, something wrong');
};

export default { fetchCountries, onFetchError };



