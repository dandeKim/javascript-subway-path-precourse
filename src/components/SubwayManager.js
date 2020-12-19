import { stations, lines } from "../@shared/data.js";
import { hideElement, showElement } from "../@shared/domUtils.js";
class SubwayManager {
  constructor() {
    this.stations = stations;
    this.lines = lines;

    this.render();
  }

  setDOMElements = () => {
    this.$departureStationInput = document.querySelector(
      "#departure-station-name-input"
    );
    this.$arrivalStationInput = document.querySelector(
      "#arrival-station-name-input"
    );
    this.$searchTypeRadioInputs = document.querySelectorAll(
      "input[name='search-type']"
    );
    this.$searchButton = document.querySelector("#search-button");
    this.$resultContainer = document.querySelector("#result-container");
  };

  handleSearchButton = event => {
    event.preventDefault();
  };

  resetDOMElements = () => {
    hideElement(this.$resultContainer);
  };

  render = () => {
    this.setDOMElements();
    this.resetDOMElements();

    this.$searchButton.addEventListener("click", this.handleSearchButton);
  };
}

export default SubwayManager;
