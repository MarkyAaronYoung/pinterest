import pinComponent from '../pins/pins';
import pinData from '../../helpers/data/pinData';
import utils from '../../helpers/utils';

const buildPins = () => {
  pinData.getPins()
    .then((pins) => {
      console.warn('get pins worked', pins);
      let domString = `
        <h2 class="text-center">Pins</h2>
        <div class="d-flex flex-wrap">
      `;

      pins.forEach((pin) => {
        domString += pinComponent.pinBuilder(pin);
      });

      domString += '</div>';

      utils.printToDom('#pins', domString);
    })
    .catch((err) => console.error('get pins broke', err));
};

export default { buildPins };
