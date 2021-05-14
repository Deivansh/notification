import emailService from "./index";

describe("send mail", () => {
	test("send mail to a person", async () => {
		jest.setTimeout(15000);
		let contact = "deivansh@gmail.com";
		let message = "Jest test mail.";

		let result = await emailService.sendMail(contact, message);
		expect(typeof result).toBe("object");
		expect(result).toHaveProperty("accepted");
	});
	test("send mail to no contact", async () => {
		jest.setTimeout(15000);
		let contact = "";
		let message = "hey";
		expect(async () => {
			await emailService.sendMail(contact, message);
		}).rejects.toEqual(new Error("No recipients defined"));
	});
});
