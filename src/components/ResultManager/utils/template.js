import { UNIT } from "../../../@shared/constants.js";

const unitTemplate = (distance, time) => {
  return `
      <tr>
        <td>${distance}${UNIT.KILOMETER_UNIT}</td>
        <td>${time}${UNIT.MINUTE_UNIT}</td>
      </tr>
    `;
};

const pathTemplate = searchedPathList => {
  return `
      <tr>
        <td colspan="2">${searchedPathList.join(" ➡ ")}</td>
      </tr>
    `;
};

export { unitTemplate, pathTemplate };
