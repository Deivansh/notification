export default function buildCheckNotification({ isValidEmail }) {
	return async function checkNotification({ medium, contact, message } = {}) {
		if (!medium) {
			throw new Error("Notification must have a medium.");
		}
		if (!["email", "whatsapp"].includes(medium)) {
			throw new Error("Invalid notification medium sent.");
		}
		if (!contact) {
			throw new Error("Notification must have a contact.");
		}
		if (medium == "email") {
			let emailValidity = isValidEmail(contact);
			if (!emailValidity) throw new Error("Invalid email sent.");
		}
		if (!message || message.length < 1) {
			throw new Error("Notification must have a message.");
		}

		return Object.freeze({
			getMedium: () => medium,
			getContact: () => contact,
			getMessage: () => message,
		});
	};
}
