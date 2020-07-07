import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

// axios.get(`${baseUrl}/boards.json`);

const getBoards = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/boards.json`)
    .then((response) => {
      const boardObjects = response.data;
      const boards = [];
      Object.keys(boardObjects).forEach((boardId) => {
        // add id onto each object
        boardObjects[boardId].id = boardId;
        boards.push(boardObjects[boardId]);
        // put object onto the boards array
      });
      //  take response
      //  format into array of objects
      //  adding the id onto each object
      //  resolve the new array of objects
      resolve(boards);
    })
    .catch((err) => reject(err));
});

const getBoardById = (boardId) => axios.get(`${baseUrl}/boards/${boardId}.json`);

export default { getBoards, getBoardById };
