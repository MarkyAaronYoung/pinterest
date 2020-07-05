const pinBuilder = (pin) => {
  const domString = `
    <div class="card" style="width: 18rem;">
      <img src="${pin.imgURL}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${pin.name}</h5>
        </div>
    </div>
  `;

  return domString;
};

export default { pinBuilder };
