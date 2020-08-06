import boardData from '../../helpers/data/boardData';
import boardPinData from '../../helpers/data/pinData';
import utils from '../../helpers/utils';

const buildBoardPins = (e) => {
  const boardId = e.target.closest('.card').id;
  boardData.getBoardById(boardId)
    .then((response) => {
      const board = response.data;

      let domString = `
        <h2 class="text-center">Featured Board</h2>
        <div class="col-12">
          <div class="card text-white bg-dark border-0 round-0">
            <div class="card-header">${board.name}</div>
            <div class="card-body"></div>
        `;

      // boardPinsData.getBoardPinsbyBoardId(board.id)
      boardPinData.getBoardPinsbyBoardId(boardId)
        .then((pinsCollection) => {
          // iterate over the pin collection/all pins
          // pull the name of each pin
          //  add it to domString
          pinsCollection.forEach((pin) => {
            domString += `
            <h2 class="text-center">HERROO${pin.name}</h2>
            <img src="${pin.imgURL} alt="..." class="img-thumbnail">
            `;
            console.warn('getBoardPinsByBoardID worked', pinsCollection);
          });
        })
        .catch((err) => console.error('problem in getBoardPinsbyBoardId', err));
      domString += '</div>';

      utils.printToDom('#boardPins', domString);
    })
    .catch((err) => console.error('problem with singleboard', err));
};

export default { buildBoardPins };

// get the board print all the pins
