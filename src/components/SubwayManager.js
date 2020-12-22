import SubwayPathManager from "./SubwayPathManager/SubwayPathManager.js";
import ResultManager from "./ResultManager/ResultManager.js";
import { stations, lines } from "../@shared/data.js";
import { hideElement } from "../@shared/domUtils.js";

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
      this.setUserState
    );
    this.resultManager = new ResultManager(
      this.$resultContainer,
      this.getUserState,
      this.getLines
    );
  };

  setUserState = (departureStation, arrivalStation, searchType) => {
    this.userState = { departureStation, arrivalStation, searchType };
    this.resultManager.printResult();
  };

  getUserState = () => {
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
