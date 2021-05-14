export default function makeEmailService({ nodemailer, configuration_object }) {
	const transport = nodemailer.createTransport({
		service: "gmail",
		secure: false,
		auth: {
			user: configuration_object.email.user,
			pass: configuration_object.email.pass,
		},
		tls: {
			rejectUnauthorized: false,
		},
	});
	return Object.freeze({
		sendMail,
	});
	async function sendMail(contacts, message) {
		try {
			let mailOptions = {
				from: configuration_object.email.user,
				to: contacts,
				subject: "TEST MAIL",
				text: message,
			};
			let mailAcknowledgment = await transport.sendMail(mailOptions);
			return mailAcknowledgment;
		} catch (error) {
			console.log(`CAUGHT ERROR sendMail: ${error}`);
			throw error;
		}
	}
}
