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
exports.getAgentsController = exports.registerAgentController = void 0;
const agent_1 = __importDefault(require("../model/agent"));
const services_1 = require("../services");
const response_1 = require("../utils/response");
// to register agents
const registerAgentController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, username, employmentYear } = req.body;
        const isExistingAgent = yield agent_1.default.findOne({
            email: email,
        });
        if (isExistingAgent) {
            (0, response_1.sendSuccessResponse)(res, 200, "agent already exists");
        }
        else {
            const agentUniqueId = (0, services_1.generateAgentId)(employmentYear);
            const agent = yield agent_1.default.create({
                agentId: agentUniqueId,
                username,
                email,
                employmentYear,
            });
            const agentData = {
                agentId: agent.agentId,
                username: agent.username,
                email: agent.email,
                employmentYear: agent.employmentYear,
            };
            (0, response_1.sendSuccessResponse)(res, 200, agentData);
        }
    }
    catch (error) {
        (0, response_1.sendErrorResponse)(res, 500, error);
    }
});
exports.registerAgentController = registerAgentController;
// get registered agents
const getAgentsController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const agents = yield agent_1.default.find();
        if (!agents) {
            (0, response_1.sendErrorResponse)(res, 404, "not found any agent");
        }
        (0, response_1.sendSuccessResponse)(res, 200, agents);
    }
    catch (error) {
        (0, response_1.sendErrorResponse)(res, 500, error);
    }
});
exports.getAgentsController = getAgentsController;
