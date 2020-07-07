import firebase from 'firebase/app';
import 'firebase/auth';

import boardList from '../../components/boardList/boardList';
import pinsList from '../../components/pinsList/pinsList';

const authDiv = $('#auth');
const boardsDiv = $('#boards');
const pinsDiv = $('#pins');
const logoutButton = $('#navbar-logout-button');
const boardPinsDiv = $('#boardPins');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      boardsDiv.removeClass('hide');
      pinsDiv.removeClass('hide');
      boardPinsDiv.removeClass('hide');
      logoutButton.removeClass('hide');

      pinsList.buildPins();
      boardList.buildBoards();
    } else {
      authDiv.removeClass('hide');
      boardsDiv.addClass('hide');
      pinsDiv.addClass('hide');
      boardPinsDiv.addClass('hide');
      logoutButton.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
