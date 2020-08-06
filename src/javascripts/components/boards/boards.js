const boardBuilder = (board) => {
  const domString = `
   <div class="col-3">
     <div class="card board-card" id=${board.id}>
      <div class="card-body">
       <div class="card-header">${board.name}</div>
        <h5 class="card-title"></h5>
      </div>
     </div>
    </div> 
 `;

  return domString;
};

export default { boardBuilder };
