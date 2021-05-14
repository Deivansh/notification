export default function makeScheduleNotification({ scheduleEmail }) {
	return async function scheduleNotification(scheduleInfo) {
		try {
			if (scheduleInfo.medium == "email") {
				setInterval(async () => {
					let mailAcknowledgment = await scheduleEmail(scheduleInfo);
					if (!mailAcknowledgment) {
						console.log("Resending mail");
						scheduleInfo = {
							...scheduleInfo,
							hours: new Date().getHours(),
							minutes: new Date().getMinutes() + 1,
						};
					}
				}, 60000);
			}
		} catch (e) {
			console.log(`SCHEDULED NOTIFICATION ERROR: ${e}`);
		}
	};
}
