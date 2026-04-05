import 'modern-normalize/modern-normalize.css';
import './css/styles.css';
import './js/header.js';
import './js/furniture_list.js';
import './js/furniture-details-modal.js';
import './js/order-modal.js';
import './js/popular-goods';
import './js/faq';
import './js/feedback.js';
import axios from 'axios';

// Global loader functions
const globalLoader = document.getElementById('global-loader');

function showGlobalLoader() {
  globalLoader.classList.remove('visually-hidden');
}

function hideGlobalLoader() {
  globalLoader.classList.add('visually-hidden');
}

// Axios interceptors for global loader
axios.interceptors.request.use(config => {
  showGlobalLoader();
  return config;
});

axios.interceptors.response.use(
  response => {
    hideGlobalLoader();
    return response;
  },
  error => {
    hideGlobalLoader();
    return Promise.reject(error);
  }
);

