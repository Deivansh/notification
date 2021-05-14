# To setup

Go to config/default.js. Change email.user and email.pass to your email ID and credentials respectively.
Ensure you have switched ON "Allow less secure apps" for your email ID and also processed "DisplayUnlockCaptcha" for your Email ID.
Go to src/data-access/users.js and enter the JSON with required information. An example is already present in the file.

# To start the script

npm install
npm run dev --> To run with default schedule time set in package.json.
nodemon --exec ./node_modules/.bin/babel-node ./src/index.js [hours] [minutes] --> To schedule mail at your desired time.
E.g: nodemon --exec ./node_modules/.bin/babel-node ./src/index.js 15 23. This will schedule the scheduler to send mail at 15:23.

# To send notification via an API

POST localhost:8181/send-notification
Request Body:
{
"medium":"email",
"contact":"[Receiver_Email_ID]",//String
"message":"[Your_Message]"//String
}

# To run tests

npm test
