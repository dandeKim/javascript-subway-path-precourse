import DijkstraManager from "./DijkstraManager.js";
import { SEARCH_TYPE, UNIT } from "../../@shared/constants.js";
import { hideElement, showElement } from "../../@shared/domUtils.js";
import { pathTemplate, unitTemplate } from "./utils/template.js";
import { isValidPath } from "./utils/validation.js";

class ResultManager {
  constructor($resultContainer, getUserState, getLines) {
    this.$resultContainer = $resultContainer;
    this.getUserState = getUserState;
    this.lineList = getLines();

    this.render();
  }

  setDOMElements = () => {
    this.$tbody = document.querySelector("#result-table tbody");
    this.$arrivalInput = document.querySelector("#arrival-station-name-input");
  };

  setComponent = () => {
    this.dijkstraManager = new DijkstraManager(this.lineList);
  };

  setSearchResult = () => {
    const {
      departureStation,
      arrivalStation,
      searchType,
    } = this.getUserState();

    if (searchType === SEARCH_TYPE.DISTANCE) {
      this.searchResult = this.dijkstraManager.getDistancePath(
        departureStation,
        arrivalStation
      );
    }

    if (searchType === SEARCH_TYPE.MINUTE) {
      this.searchResult = this.dijkstraManager.getMinutePath(
        departureStation,
        arrivalStation
      );
    }
  };

  setTotalDistance = () => {
    this.totalDistance = this.dijkstraManager.getTotalLength(
      this.searchResult,
      UNIT.KILOMETER_UNIT
    );

    this.totalMinute = this.dijkstraManager.getTotalLength(
      this.searchResult,
      UNIT.MINUTE_UNIT
    );
  };

  printResult = () => {
    this.setSearchResult();
    this.setTotalDistance();

    if (!isValidPath(this.$arrivalInput, this.searchResult)) {
      hideElement(this.$resultContainer);

      return;
    }

    showElement(this.$resultContainer);
    this.$tbody.innerHTML =
      unitTemplate(this.totalDistance, this.totalMinute) +
      pathTemplate(this.searchResult);
  };

  render = () => {
    this.setDOMElements();
    this.setComponent();
  };
}

export default ResultManager;
