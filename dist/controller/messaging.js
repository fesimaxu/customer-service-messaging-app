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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStoredMessages = exports.sendMessageController = void 0;
const response_1 = require("../utils/response");
const messages_1 = __importDefault(require("../model/messages"));
const sendMessageController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user, message } = req.body;
        const userMessages = yield messages_1.default.create({
            user,
            message,
        });
        (0, response_1.sendSuccessResponse)(res, 200, userMessages);
    }
    catch (error) {
        (0, response_1.sendErrorResponse)(res, 500, error);
    }
});
exports.sendMessageController = sendMessageController;
const getStoredMessages = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const instantMessages = yield messages_1.default.find();
        if (!instantMessages) {
            (0, response_1.sendErrorResponse)(res, 404, "No instant message found");
        }
        (0, response_1.sendSuccessResponse)(res, 200, instantMessages);
    }
    catch (error) {
        (0, response_1.sendErrorResponse)(res, 500, error);
    }
});
exports.getStoredMessages = getStoredMessages;
