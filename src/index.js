const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
const { sendBasicEmail } = require("./services/email-service");
const setUpAndStartServer = () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    console.log(`Server started at PORT ${PORT}`);
    // Send email to myself for testing purposes only!
    sendBasicEmail(
      "nodejsreminderservice@gmail.com",
      "skmadaan11@gmail.com",
      "This is a testing Email",
      "<h1>Hello World</h1>"
    );
  });
};
setUpAndStartServer();
