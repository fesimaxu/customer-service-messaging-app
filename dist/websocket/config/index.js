"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = require("socket.io");
const messenger_1 = require("../messenger");
const socketConfig = (server) => __awaiter(void 0, void 0, void 0, function* () {
    const io = new socket_io_1.Server(server, {
        cors: {
            origin: "*",
        },
        pingTimeout: 20000,
    });
    (0, messenger_1.customerServiceChatSocket)(io);
    io.on("connection", (socket) => {
        console.log("client connected");
        socket.on("disconnect", () => {
            console.log("client disconnected");
        });
    });
});
exports.default = socketConfig;
