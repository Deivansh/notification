import { notifyUserEmail } from "./index";

describe("send email notification", () => {
	let notificationInfo = {
		medium: "email",
		contact: "deivansh@gmail.com",
		message: "Hey Testing!",
	};

	test("should return email acknowledgment", async () => {
		jest.setTimeout(15000);
		let result = await notifyUserEmail(notificationInfo);
		expect(typeof result).toBe("object");
		expect(result).toHaveProperty("accepted");
	});
});
