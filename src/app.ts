import app from "./server";
import sequelize from "./db";
import config from "./config";

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
});
