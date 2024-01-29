"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAgentId = void 0;
const generateAgentId = (employmentYear) => {
    const randValue = Math.floor(Math.random() * 100);
    return `BA${employmentYear.slice(-2)}0${randValue}`;
};
exports.generateAgentId = generateAgentId;
