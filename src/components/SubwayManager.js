import SubwayPathManager from "./SubwayPathManager/SubwayPathManager.js";
import ResultManager from "./ResultManager/ResultManager.js";
import { stations, lines } from "../@shared/data.js";
import { hideElement, showElement } from "../@shared/domUtils.js";

class SubwayManager {
  constructor() {
    this.stations = stations;
    this.lines = lines;

    this.render();
  }

  setDOMElement = () => {
    this.$resultContainer = document.querySelector("#result-container");
  };

  setComponents = () => {
    this.subwayPathManager = new SubwayPathManager(
      this.getStations,
      this.setState
    );
    this.resultManager = new ResultManager(this.getState, this.getLines);
  };

  setState = (departureStation, arrivalStation, searchType) => {
    this.userState = { departureStation, arrivalStation, searchType };

    showElement(this.$resultContainer);
    this.resultManager.printResult();
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

  resetDOMElements = () => {
    hideElement(this.$resultContainer);
  };

  render = () => {
    this.setDOMElement();
    this.resetDOMElements();
    this.setComponents();
  };
}

export default SubwayManager;
