import Dijkstra from "./utils/Dijkstra.js";
import { UNIT } from "../../@shared/constants.js";

class DijkstraManager {
  constructor(lineList) {
    this.lineList = lineList;

    this.render();
  }

  setManager = (manager, stations, type) => {
    for (let i = 0; i < stations.length - 1; i++) {
      let totalType = type[i];
      manager.addEdge(stations[i], stations[i + 1], totalType);
      totalType += type[i + 1] || 0;
    }
  };

  getDistancePath = (departureStation, arrivalStation) => {
    return this.distanceManager.findShortestPath(
      departureStation,
      arrivalStation
    );
  };

  getTotalLength = (path, unit) => {
    if (unit === UNIT.KILOMETER_UNIT) {
      this.adjacencyList = this.distanceManager.getAdjacencyList();
    }

    if (unit === UNIT.MINUTE_UNIT) {
      this.adjacencyList = this.minuteManager.getAdjacencyList();
    }

    let totalLength = 0;
    for (let i = 0; i < path.length - 1; i++) {
      totalLength += this.adjacencyList[path[i]][path[i + 1]];
    }

    return totalLength;
  };

  getMinutePath = (departureStation, arrivalStation) => {
    return this.minuteManager.findShortestPath(
      departureStation,
      arrivalStation
    );
  };

  render = () => {
    this.distanceManager = new Dijkstra();
    this.minuteManager = new Dijkstra();

    this.lineList.forEach(line => {
      this.setManager(this.distanceManager, line.station, line.kilometer);
      this.setManager(this.minuteManager, line.station, line.minute);
    });
  };
}

export default DijkstraManager;
