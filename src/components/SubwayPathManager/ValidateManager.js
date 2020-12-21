import { NUMBER, ALERT } from "../../@shared/constants.js";
import { showAlertMessage } from "../../@shared/domUtils.js";

class ValidateManager {
  constructor(stationList) {
    this.stationList = stationList;

    this.render();
  }

  setDOMElements = () => {
    this.$departureInput = document.querySelector(
      "#departure-station-name-input"
    );
    this.$arrivalInput = document.querySelector("#arrival-station-name-input");
  };

  isValidStationName = ($input, stationName) => {
    const name = stationName.trim();
    const isValidNameLength = name.length >= NUMBER.MIN_STATION_NAME_LENGTH;
    const isValidStation = this.stationList.includes(name);

    if (!isValidNameLength) {
      showAlertMessage($input, ALERT.INVALID_STATION_NAME_LENGTH);
    }

    if (!isValidStation) {
      showAlertMessage($input, ALERT.INVALID_STATION_NAME);
    }

    return isValidNameLength && isValidStation;
  };

  isDuplicatedStation = () => {
    const isDuplicated = this.departureStation === this.arrivalStation;

    if (isDuplicated) {
      showAlertMessage(this.$arrivalInput, ALERT.DUPLICATED_STATIONS);
    }

    return isDuplicated;
  };

  checkNameValidation = (departureStation, arrivalStation) => {
    this.departureStation = departureStation;
    this.arrivalStation = arrivalStation;

    if (!this.isValidStationName(this.$departureInput, this.departureStation)) {
      return false;
    }

    if (!this.isValidStationName(this.$arrivalInput, this.arrivalStation)) {
      return false;
    }

    if (this.isDuplicatedStation()) return false;

    return true;
  };

  render = () => {
    this.setDOMElements();
  };
}

export default ValidateManager;
