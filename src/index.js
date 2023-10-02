const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
const { sendBasicEmail } = require("./services/email-service");
const cron = require("node-cron");
const jobs = require("./utils/job");
const apiRoutes = require("./routes/index");
const setUpAndStartServer = () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", apiRoutes);
  app.listen(PORT, () => {
    console.log(`Server started at PORT ${PORT}`);
    jobs();
    // Send email to myself for testing purposes only!
    // sendBasicEmail(
    //   "nodejsreminderservice@gmail.com",
    //   "skmadaan11@gmail.com",
    //   "This is a testing Email",
    //   "<h1>Hello World</h1>"
    // );
    // cron.schedule("*/2 * * * *", () => {
    //   console.log("running a task every two minutes");
    // });
  });
};
setUpAndStartServer();
