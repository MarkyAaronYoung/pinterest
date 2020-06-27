import boardData from '../../helpers/data/boardData';

// import utils from '../../helpers/utils';

// get all boards
// loop and create domString
// printToDom

const buildBoards = () => {
  boardData.getBoards()
    .then((response) => console.warn('get boards worked!', response.data))
    .catch((err) => console.error('get board broke', err));
  // const domString = '<h1>I see mushrooms</h1>';
  // utils.printToDom('#boards', domString);
};

export default { buildBoards };
