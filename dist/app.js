"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const errorHandler_1 = __importDefault(require("./middleware/errorHandler"));
const config_1 = __importDefault(require("./websocket/config"));
const endpoints_1 = require("./utils/endpoints");
const message_1 = __importDefault(require("./routes/message"));
const agent_1 = __importDefault(require("./routes/agent"));
const swagger_1 = __importDefault(require("./utils/swagger"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const server = (0, http_1.createServer)(app);
const PORT = process.env.PORT;
app.use((0, morgan_1.default)("dev"));
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(endpoints_1.BASE_URL, message_1.default);
app.use(endpoints_1.BASE_URL, agent_1.default);
app.use(errorHandler_1.default);
mongoose_1.default
    .connect(`${process.env.DATABASE_URL}`)
    .then(() => {
    console.log("Database Connected !");
})
    .catch((e) => {
    console.log("failed to connect to database", e);
});
// Websocket Connection
(0, config_1.default)(server)
    .then(() => {
    console.log("websocket is connected");
})
    .catch((err) => {
    console.log(err);
});
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    (0, swagger_1.default)(app, 3050);
});
exports.default = server;
