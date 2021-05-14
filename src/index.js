import express from "express";
import { sendNotification, scheduleNotification } from "./controllers";
import makeCallback from "./express-callback";

const app = express();

app.use(express.json());

app.listen(8181, () => {
	console.log(`App is listening on 8181`);
});

const args = process.argv.slice(2);
if (args[0] < 0 || args[0] > 24 || isNaN(args[0])) {
	throw new Error("Invalid argument value for hours");
}
if (args[0] < 0 || args[1] > 60 || isNaN(args[1])) {
	throw new Error("Invalid argument value for minutes");
}

scheduleNotification({
	hours: parseInt(args[0]),
	minutes: parseInt(args[1]),
	medium: "email",
});

//ROUTES
app.post("/send-notification", makeCallback(sendNotification));

export default app;
