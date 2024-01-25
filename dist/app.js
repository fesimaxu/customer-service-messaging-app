"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const errorHandler_1 = __importDefault(require("./middleware/errorHandler"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT;
app.use((0, morgan_1.default)("dev"));
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(errorHandler_1.default);
mongoose_1.default
    .connect(`${process.env.DATABASE_URL}`)
    .then(() => {
    console.log("Database Connected !");
    app.listen(PORT);
    console.log(`Server running on port 8080`);
    //swaggerDocs(app, 8080);
})
    .catch((e) => {
    console.log("failed to connect to database", e);
});
exports.default = app;
