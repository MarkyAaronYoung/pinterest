import './pins.scss';

const pinBuilder = (pin) => {
  const domString = `
    <div class="pin-card">
      <img src="${pin.imgURL}" class="card-img-top" alt="...">
      <h5 class="card-title">${pin.name}</h5>
    </div>
  `;

  return domString;
};

export default { pinBuilder };
