import { notifyUserEmail, scheduleEmail } from "../use-cases";
import makeSendNotification from "./send-notification";
import makeScheduleNotification from "./schedule-notification";

const sendNotification = makeSendNotification({ notifyUserEmail });
const scheduleNotification = makeScheduleNotification({ scheduleEmail });

const commentController = Object.freeze({
	sendNotification,
	scheduleNotification,
});

export default commentController;
export { sendNotification, scheduleNotification };
