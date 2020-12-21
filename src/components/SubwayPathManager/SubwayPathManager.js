import { getCheckedSearchType } from "../../@shared/domUtils.js";
import ValidateManager from "./ValidateManager.js";

class SubwayPathManager {
  constructor(getStations, setState) {
    this.stationList = getStations();
    this.setState = setState;

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
  };

  setComponents = () => {
    this.validateManager = new ValidateManager(this.stationList);
  };

  handleSearchButton = event => {
    event.preventDefault();
    const departureStation = this.$departureStationInput.value;
    const arrivalStation = this.$arrivalStationInput.value;
    const searchType = getCheckedSearchType(this.$searchTypeRadioInputs);

    const isValidUserState = this.validateManager.checkNameValidation(
      departureStation,
      arrivalStation
    );

    if (!isValidUserState) return;

    this.setState(departureStation, arrivalStation, searchType);
  };

  render = () => {
    this.setDOMElements();
    this.setComponents();

    this.$searchButton.addEventListener("click", this.handleSearchButton);
  };
}

export default SubwayPathManager;
