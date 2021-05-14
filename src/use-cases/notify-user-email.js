import checkNotification from "../notification";
export default function makeNotifyUserEmail({ emailService }) {
	return async function notifyUserEmail(notificationInfo) {
		console.time("checkNotification");
		const notification = await checkNotification(notificationInfo);
		console.timeEnd("checkNotification");
		let mailAcknowledgment = await emailService.sendMail(
			notification.getContact(),
			notification.getMessage()
		);
		return mailAcknowledgment;
	};
}
