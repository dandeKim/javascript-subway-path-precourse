import {
  isValidStationName,
  isDuplicatedStations,
} from "../../utils/validation.js";

class ValidateManager {
  constructor() {
    this.render();
  }

  setDOMElements = () => {
    this.$departureStationInput = document.querySelector(
      "#departure-station-name-input"
    );
    this.$arrivalStationInput = document.querySelector(
      "#arrival-station-name-input"
    );
  };

  isValidDepartureStation = () => {
    return isValidStationName(
      this.$departureStationInput,
      this.departureStation,
      this.stationList
    );
  };

  isValidArrivalStation = () => {
    return isValidStationName(
      this.$arrivalStationInput,
      this.arrivalStation,
      this.stationList
    );
  };

  isDuplicatedStation = () => {
    return isDuplicatedStations(
      this.$arrivalStationInput,
      this.departureStation,
      this.arrivalStation
    );
  };

  checkNameValidation = (departureStation, arrivalStation, stationList) => {
    this.departureStation = departureStation;
    this.arrivalStation = arrivalStation;
    this.stationList = stationList;

    if (!this.isValidDepartureStation()) return false;
    if (!this.isValidArrivalStation()) return false;
    if (this.isDuplicatedStation()) return false;

    return true;
  };

  render = () => {
    this.setDOMElements();
  };
}

export default ValidateManager;
