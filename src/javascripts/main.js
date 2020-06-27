import auth from './components/auth/auth';

import '../styles/main.scss';

// be able to login to our app
// see a login button if we are not logged in they should see an h1 that says pinterest
// when logged in they should see a navbar with a brand, logout button, and an h1 on the page that says board

const init = () => {
  console.warn('hi');
  auth.loginButton();
};

init();
