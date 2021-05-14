import ValidEmail from "is-valid-email";
import buildCheckNotification from "./notification";

const checkNotification = buildCheckNotification({ isValidEmail });

export default checkNotification;

function isValidEmail(email) {
	return ValidEmail(email);
}
