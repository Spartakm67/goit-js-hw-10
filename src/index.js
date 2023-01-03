import './css/styles.css';

import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { fetchCountries }  from './js/fetchCountries';

const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;


const name = 'blablabla'; 
    
fetchCountries(name);
