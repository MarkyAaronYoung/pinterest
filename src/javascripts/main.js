import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';
import auth from './components/auth/auth';
import myNavbar from './components/myNavbar/myNavbar';
import authData from './helpers/data/authData';

import '../styles/main.scss';

// be able to login to our app
// see a login button if we are not logged in they should see an h1 that says pinterest
// when logged in they should see a navbar with a brand, logout button, and an h1 on the page that says board

// on load, if you're logged in
// show all the boards

const init = () => {
  firebase.initializeApp(apiKeys.firebaseConfig);
  authData.checkLoginStatus();
  auth.loginButton();
  myNavbar.logoutEvent();

  $('body').on('mouseenter', '.board-card', (e) => {
    e.target.closest('.card').classList.add('bg-dark');
  });
  $('body').on('mouseleave', '.board-card', (e) => {
    e.target.closest('.card').classList.remove('bg-dark');
  });
};

init();
