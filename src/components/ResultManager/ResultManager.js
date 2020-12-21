import DijkstraManager from "./DijkstraManager.js";
import { SEARCH_TYPE } from "../../@shared/constants.js";
import { pathTemplate } from "./utils/template.js";

class ResultManager {
  constructor(getState, getLines) {
    this.getState = getState;
    this.lineList = getLines();

    this.render();
  }

  setDOMElements = () => {
    this.$tbody = document.querySelector("#result-table tbody");
  };

  setComponent = () => {
    this.dijkstraManager = new DijkstraManager(this.lineList);
  };

  getSearchResult = () => {
    const { departureStation, arrivalStation, searchType } = this.userState;

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

  setSearchResult = () => {
    this.userState = this.getState();
    this.getSearchResult();
  };

  printResult = () => {
    this.setSearchResult();

    this.$tbody.innerHTML = pathTemplate(this.searchResult);
  };

  render = () => {
    this.setDOMElements();
    this.setComponent();
  };
}

export default ResultManager;
