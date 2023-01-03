import './css/styles.css';

import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import Fetch from './js/fetchCountries';

const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;

// const name = 'Au';    
// Fetch.fetchCountries(name);
const input = document.querySelector('#search-box');

input.addEventListener('input', debounce(onInputValueHandler, DEBOUNCE_DELAY));

function onInputValueHandler(e) {
    e.preventDefault();
    const name = e.target.value.trim();
//   if (!name) {
//     clearMarkup();
//     return;
//   }
  
    Fetch.fetchCountries(name)
        .then(data => {
            if (data.length > 10) {
                Notify.info(
                    'Too many matches found. Please enter a more specific name.'
                );
            } else if (data.length > 1 && data.length <= 10) {
                // clearMarkup();
                markupListOfCountries(data);
            } else if (data.length === 1) {
                // clearMarkupCounries()
                markupOneCountryDetail(data);
            }
        })
        .catch(Fetch.onFetchError)
        .finally(clearMarkup);
};

