"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = exports.validateAgent = void 0;
const express_validator_1 = require("express-validator");
const response_1 = require("../../utils/response");
exports.validateAgent = [
    (0, express_validator_1.check)("username").trim().not().isEmpty().withMessage("Username is missing!"),
    (0, express_validator_1.check)("email").trim().not().isEmpty().withMessage("Email is missing!"),
    (0, express_validator_1.check)("email").isEmail().withMessage("Invalid email input"),
    (0, express_validator_1.check)("employmentYear")
        .trim()
        .not()
        .isEmpty()
        .withMessage("Employment Year is missing!"),
];
const validate = (req, res, next) => {
    const error = (0, express_validator_1.validationResult)(req).array();
    if (error.length) {
        return (0, response_1.sendErrorResponse)(res, 400, { error: error[0].msg });
    }
    next();
};
exports.validate = validate;
