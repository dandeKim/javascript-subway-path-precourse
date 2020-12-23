import { ALERT } from "../../../@shared/constants.js";
import { showAlertMessage } from "../../../@shared/domUtils.js";

const isValidPath = ($input, searchedPathList) => {
  if (!searchedPathList) {
    showAlertMessage($input, ALERT.FAILED_TO_FIND_PATH);
  }

  return Boolean(searchedPathList);
};

export { isValidPath };
