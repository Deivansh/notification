export default function makeSendNotification({ notifyUserEmail }) {
	return async function sendNotification(httpRequest) {
		try {
			const notificationBody = httpRequest.body;
			if (notificationBody.medium == "email") {
				const sentNotificationAcknowledgment = await notifyUserEmail(
					notificationBody
				);
				return {
					headers: {
						"Content-Type": "application/json",
					},
					statusCode: 201,
					body: { sentNotificationAcknowledgment },
				};
			}
		} catch (e) {
			console.log(e);

			return {
				headers: {
					"Content-Type": "application/json",
				},
				statusCode: 400,
				body: {
					error: e.message,
				},
			};
		}
	};
}
