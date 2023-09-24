const { execSync } = require("child_process");

const base = __dirname + "/src/components";

const modules = ["category", "product", "user"];

const seed = async () => {
  for (const module of modules) {
    const seedPath = `${base}/${module}/database/seeders`;
    try {
      console.log(`Running seed for module: ${module}`);
      execSync(`sequelize db:seed:all --seeders-path ${seedPath}`, {
        stdio: "inherit",
      });
    } catch (error) {
      console.error(
        `Error running seed for module ${module}: ${error.message}`
      );
      process.exit(1);
    }
  }

  console.log("All seeds have been executed successfully.");
};

seed();
