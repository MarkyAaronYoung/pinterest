import boardData from '../../helpers/data/boardData';
import boardPinsData from '../../helpers/data/boardPinsData';
import utils from '../../helpers/utils';

const buildBoardPins = (e) => {
  const boardId = e.target.closest('.card').id;
  boardData.getBoardById(boardId)
    .then((response) => {
      const board = response.data;

      boardPinsData.getBoardPinsbyBoardId(board.id)
        .then((res) => console.warn('getBoardPinsByBoardID worked', res))
        .catch((err) => console.error('problem in getBoardPinsbyBoardId', err));

      const domString = `
        <h2 class="text-center">Featured Board</h2>
        <div class="col-12">
          <div class="card text-white bg-dark border-0 round-0">
            <div class="card-header">${board.name}</div>
            <div class="card-body"></div>
          </div>
        `;

      utils.printToDom('#boardPins', domString);
    })
    .catch((err) => console.error('problem with singleboard', err));
};

export default { buildBoardPins };
