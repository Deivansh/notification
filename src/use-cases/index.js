import makeNotifyUserEmail from "./notify-user-email";
import buildScheduleEmail from "./schedule-email";
import emailService from "../notification-mediums";

const notifyUserEmail = makeNotifyUserEmail({ emailService });
const scheduleEmail = buildScheduleEmail({ emailService });
const notificationService = Object.freeze({
	notifyUserEmail,
	scheduleEmail,
});
export default notificationService;
export { notifyUserEmail, scheduleEmail };
