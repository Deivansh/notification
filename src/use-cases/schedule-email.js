import userList from "../data-access/users";
export default function buildScheduleEmail({ emailService }) {
	return async function sendEmailOnSchedule(scheduleInfo) {
		try {
			console.log("Coming for schedule check");
			let currentHours = new Date().getHours();
			let currentMinutes = new Date().getMinutes();
			console.log("Current time: " + currentHours, currentMinutes);
			console.log(
				"Scheduled time: " + scheduleInfo.hours,
				scheduleInfo.minutes
			);
			if (
				currentHours == scheduleInfo.hours &&
				currentMinutes == scheduleInfo.minutes
			) {
				let usersEmail = userList.map((value) => {
					if (value.subscribed) return value.email;
				});
				if (!usersEmail || usersEmail.length < 0)
					throw new Error("No users subscribed to send mail to.");
				let mailAcknowledgment = await emailService.sendMail(
					usersEmail,
					"Scheduled notification"
				);
				return mailAcknowledgment;
			} else {
				return "Waiting";
			}
		} catch (e) {
			console.log(`SCHEDULE-EMAIL ERROR: ${e}`);
		}
	};
}
