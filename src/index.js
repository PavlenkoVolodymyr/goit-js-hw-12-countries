// import './js/fetchCountries.js';

import './css/styles.css';

import '@pnotify/mobile/dist/PNotifyMobile.css';

import API from './js/api-service.js';
import getRefs from './js/get-refs.js';
import countriesTpl from './templates/countries.hbs';
import debounce from 'lodash.debounce';
import { alert, defaultModules } from '@pnotify/core';
import * as PNotifyMobile from '@pnotify/mobile';
