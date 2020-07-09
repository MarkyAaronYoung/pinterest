import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getBoardPinsbyBoardId = (boardpinBoardId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/boardPins.json?orderBy="boardId"&equalTo="${boardpinBoardId}"`)
    .then((response) => {
      const boardPins = response.data;

      resolve(boardPins);
    })
    .catch((err) => reject(err));
});

export default { getBoardPinsbyBoardId };
