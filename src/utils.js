"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashString = void 0;
const crypto_js_1 = __importDefault(require("crypto-js"));
const enc_base64_1 = __importDefault(require("crypto-js/enc-base64"));
const hashString = (value) => {
    let hashedValue = enc_base64_1.default.stringify(crypto_js_1.default.SHA256(value));
    hashedValue = hashedValue.replace('/', '').replace('/\\/', '');
    return hashedValue;
};
exports.hashString = hashString;
