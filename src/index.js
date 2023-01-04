import './css/styles.css';

import Notiflix from 'notiflix';


import Fetch from './js/fetchCountries';
import Markup from './js/markup';


const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;

const input = document.querySelector('#search-box');

input.addEventListener('input', debounce(onInputValueHandler, DEBOUNCE_DELAY));

function onInputValueHandler(e) {
    e.preventDefault();
    const name = input.value.trim();
  if (!name) {
    Markup.clearMarkup();
    return;
  }
        
    Fetch.fetchCountries(name)
        .then(data => {

            if (data.length > 10) {
                Notiflix.Notify.info(
                    'Too many matches found. Please enter a more specific name.'
                );
            } else if (data.length > 1 && data.length <= 10) {
                Markup.clearMarkup();
                Markup.markupManyCountries(data);
            } else if (data.length === 1) {
                Markup.clearMarkup();
                Markup.markupOneCountry(data);
            }
        }).catch(Fetch.onFetchError);
};

Notiflix.Notify.init({
  position: 'center-top',
  width: '380px',
  distance: '30px',
  opacity: 1,
  borderRadius: '5px',
  rtl: false,
  timeout: 3000,
});