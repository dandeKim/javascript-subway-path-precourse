import { ALERT } from "../../../@shared/constants.js";
import { showAlertMessage } from "../../../@shared/domUtils.js";

const isValidPath = ($input, lineResult) => {
  if (!lineResult) {
    showAlertMessage($input, ALERT.FAILED_TO_FIND_PATH);

    return false;
  }

  return true;
};

export { isValidPath };
