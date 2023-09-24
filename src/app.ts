import swaggerUi from "swagger-ui-express";
import yaml from "yamljs";
import app from "./server";
import sequelize from "./db";
import config from "./config";
import transporter from "./shared/utils/mailer";

// api documentation
const swaggerDocument = yaml.load(__dirname + "/swagger.yaml");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}`);

  sequelize
    .authenticate()
    .then(() => {
      console.log("Connected to database");
    })
    .catch((err) => {
      console.log("Unable to connect to database");
      console.log(err);
    });

  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });
});
