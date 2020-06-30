import boardData from '../../helpers/data/boardData';

// import utils from '../../helpers/utils';

// get all boards
// loop and create domString
// printToDom

const buildBoards = () => {
  boardData.getBoards()
    .then((boards) => console.warn('get boards worked!', boards))
    .catch((err) => console.error('get board broke', err));
  // const domString = '<h1>I see mushrooms</h1>';
  // utils.printToDom('#boards', domString);
};

export default { buildBoards };
