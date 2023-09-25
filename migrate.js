const { execSync } = require("child_process");

const base = __dirname + "/src/components";

const modules = [
  "category",
  "product",
  "user",
  "review",
  "wishlist",
  "coupon",
  "cart",
];

const migration = async () => {
  for (const migrationPath of modules.map(
    (module) => `${base}/${module}/database/migrations`
  )) {
    try {
      console.log(`Running migration: ${migrationPath}`);
      execSync(`sequelize db:migrate --migrations-path ${migrationPath}`, {
        stdio: "inherit",
      });
    } catch (error) {
      console.error(
        `Error running migration ${migrationPath}: ${error.message}`
      );
      process.exit(1);
    }
  }

  console.log("All migrations have been executed successfully.");
};

migration();
