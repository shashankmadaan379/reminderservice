const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
<<<<<<< HEAD
// const { sendBasicEmail } = require("./services/email-service");
// const cron = require("node-cron");
// const jobs = require("./utils/job");
=======
const { sendBasicEmail } = require("./services/email-service");
const cron = require("node-cron");
const jobs = require("./utils/job");
>>>>>>> c2cd712240388d9f615bf3dcc3c3b3d1760add12
const apiRoutes = require("./routes/index");
const setUpAndStartServer = () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", apiRoutes);
  app.listen(PORT, () => {
    console.log(`Server started at PORT ${PORT}`);
<<<<<<< HEAD
    // jobs();
=======
    jobs();
>>>>>>> c2cd712240388d9f615bf3dcc3c3b3d1760add12
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
