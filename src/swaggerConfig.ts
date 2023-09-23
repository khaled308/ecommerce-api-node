import swaggerJsdoc from "swagger-jsdoc";

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "API",
      version: "1.0.0",
      description: "API documentation",
    },
    basePath: "/",
  },
  apis: ["./src/components/**/*.ts"],
};

const specs = swaggerJsdoc(swaggerOptions);
export default specs;
