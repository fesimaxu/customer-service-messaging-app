"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = require("swagger-ui-express");
const endpoints_1 = require("./endpoints");
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: `${endpoints_1.APP_NAME} API Docs`,
            version: endpoints_1.version,
            description: `Rest APIs for ${endpoints_1.APP_NAME}`
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
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
const swaggerDocs = (app, port) => {
    // Swagger page
    app.use(endpoints_1.API_DOCS_ROUTE, swagger_ui_express_1.serve, (0, swagger_ui_express_1.setup)(swaggerSpec, swaggerCustomOptions));
    // Docs in JSON format
    app.get("docs.json", (req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpec);
    });
};
exports.default = swaggerDocs;
