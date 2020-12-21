import { ALERT } from "../../../@shared/constants";
import { showAlertMessage } from "../../../@shared/domUtils";

const isValidSection = ($input, lineResult) => {
  if (!lineResult) {
    showAlertMessage($input, ALERT.FAILED_TO_FIND_SECTION);

    return false;
  }

  return true;
};

export { isValidSection };
