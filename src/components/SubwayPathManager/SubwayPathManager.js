import { getCheckedSearchType } from "../../@shared/domUtils.js";
import ValidateManager from "./ValidateManager.js";

class SubwayPathManager {
  constructor(getStations, setUserState) {
    this.stationList = getStations();
    this.setUserState = setUserState;

    this.render();
  }

  setDOMElements = () => {
    this.$departureInput = document.querySelector(
      "#departure-station-name-input"
    );
    this.$arrivalInput = document.querySelector("#arrival-station-name-input");
    this.$searchTypeInputs = document.querySelectorAll(
      "input[name='search-type']"
    );
    this.$searchButton = document.querySelector("#search-button");
  };

  setComponents = () => {
    this.validateManager = new ValidateManager(this.stationList);
  };

  handleSearchButton = event => {
    event.preventDefault();
    const departureStation = this.$departureInput.value;
    const arrivalStation = this.$arrivalInput.value;
    const searchType = getCheckedSearchType(this.$searchTypeInputs);

    const isValidStationNames = this.validateManager.checkStationValidation(
      departureStation,
      arrivalStation
    );

    if (!isValidStationNames) return;

    this.setUserState(departureStation, arrivalStation, searchType);
  };

  render = () => {
    this.setDOMElements();
    this.setComponents();

    this.$searchButton.addEventListener("click", this.handleSearchButton);
  };
}

export default SubwayPathManager;
