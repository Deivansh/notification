import checkNotification from "./index";

describe("check email notification", () => {
	let notificationInfo = {
		medium: "email",
		contact: "deivansh@gmail.com",
		message: "Hey Testing!",
	};

	test("should return notification getter object", async () => {
		let check_noti_obj = await checkNotification(notificationInfo);
		expect(check_noti_obj).toMatchObject({
			getMedium: expect.any(Function),
			getContact: expect.any(Function),
			getMessage: expect.any(Function),
		});
	});
});
