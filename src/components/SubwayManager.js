import SubwayPathManager from "./SubwayPathManager/SubwayPathManager.js";
import PrintResultManager from "./PrintResultManager.js";
import DijkstraManager from "./DijkstraManager.js";
import { stations, lines } from "../utils/data.js";
import { hideElement, showElement } from "../utils/domUtils.js";
import { SEARCH_TYPE } from "../utils/constants.js";

class SubwayManager {
  constructor() {
    this.stations = stations;
    this.lines = lines;

    this.render();
  }

  setDOMElements = () => {
    this.$resultContainer = document.querySelector("#result-container");
  };

  setComponents = () => {
    this.subwayPathManager = new SubwayPathManager(
      this.getStations,
      this.setState
    );
    this.printResultManager = new PrintResultManager(
      this.getLines,
      this.getLineResult
    );
    this.dijkstraManager = new DijkstraManager(this.getLines);
  };

  setState = (departureStation, arrivalStation, searchType) => {
    this.userState = { departureStation, arrivalStation, searchType };

    showElement(this.$resultContainer);
    this.printResultManager.render();
  };

  getState = () => {
    if (!this.userState) return;

    return this.userState;
  };

  getStations = () => {
    return this.stations;
  };

  getLines = () => {
    return this.lines;
  };

  getLineResult = () => {
    return this.lineResult;
  };

  getLineResult = () => {
    const { departureStation, arrivalStation, searchType } = this.userState;
    let lineResult;

    if (searchType === SEARCH_TYPE.DISTANCE) {
      lineResult = this.dijkstraManager.getDistanceResult(
        departureStation,
        arrivalStation
      );
    }

    if (searchType === SEARCH_TYPE.MINUTE) {
      lineResult = this.dijkstraManager.getMinuteResult(
        departureStation,
        arrivalStation
      );
    }

    return lineResult;
  };

  resetDOMElements = () => {
    hideElement(this.$resultContainer);
  };

  render = () => {
    this.setDOMElements();
    this.resetDOMElements();
    this.setComponents();
  };
}

export default SubwayManager;
