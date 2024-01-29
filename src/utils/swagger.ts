import swaggerJsdoc from "swagger-jsdoc";
import { serve, setup } from "swagger-ui-express";
import { API_DOCS_ROUTE, APP_NAME, version } from "./endpoints";



const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: `${APP_NAME} API Docs`,
      version,
      description: `Rest APIs for ${APP_NAME}`
    },
  },
  apis: [
    "./src/routes/*.ts",
    "./src/routes/*.js",
    "./src/routes/*/*.ts",
    "./src/routes/*/*.js",
    "./src/models/*.ts",
    "./src/models/*.js",
    "./src/models/*/*.ts",
    "./src/models/*/*.js",
  ],
};

// Hide Schema in the UI
const swaggerCustomOptions = {
  customCss: ".swagger-ui section.models { visibility: hidden;}",
};
const swaggerSpec = swaggerJsdoc(options);

const swaggerDocs = (app: any, port: number) => {
  
  // Swagger page
  app.use(API_DOCS_ROUTE, serve, setup(swaggerSpec, swaggerCustomOptions));

  // Docs in JSON format
  app.get("docs.json", (req: any, res: any) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
};

export default swaggerDocs;
