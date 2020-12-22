import DijkstraManager from "./DijkstraManager.js";
import { SEARCH_TYPE } from "../../@shared/constants.js";
import { hideElement, showElement } from "../../@shared/domUtils.js";
import { pathTemplate } from "./utils/template.js";
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
      this.searchResult = this.dijkstraManager.getDistanceResult(
        departureStation,
        arrivalStation
      );
    }

    if (searchType === SEARCH_TYPE.MINUTE) {
      this.searchResult = this.dijkstraManager.getMinuteResult(
        departureStation,
        arrivalStation
      );
    }
  };

  printResult = () => {
    this.setSearchResult();

    if (!isValidPath(this.$arrivalInput, this.searchResult)) {
      hideElement(this.$resultContainer);

      return;
    }

    showElement(this.$resultContainer);
    this.$tbody.innerHTML = pathTemplate(this.searchResult);
  };

  render = () => {
    this.setDOMElements();
    this.setComponent();
  };
}

export default ResultManager;
