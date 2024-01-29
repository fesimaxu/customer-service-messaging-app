"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.endpoints = exports.version = exports.API_DOCS_ROUTE = exports.APP_NAME = exports.BASE_URL = void 0;
exports.BASE_URL = "/api/v1";
exports.APP_NAME = "Customer Service Web app";
exports.API_DOCS_ROUTE = "/docs";
exports.version = "1.0.0";
exports.endpoints = {
    sendMessages: "/send-message",
    userMessages: "/messages",
    registerAgent: "/add-agent",
    getAgents: "/get-agents"
};
