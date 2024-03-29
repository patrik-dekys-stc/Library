"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashLoginDetails = exports.loadBooks = exports.hashString = void 0;
const crypto_js_1 = __importDefault(require("crypto-js"));
const enc_base64_1 = __importDefault(require("crypto-js/enc-base64"));
const fs_1 = __importDefault(require("fs"));
const hashString = (value) => {
    let hashedValue = enc_base64_1.default.stringify(crypto_js_1.default.SHA256(value));
    hashedValue = hashedValue.replace(/\//g, '').replace(/\\/g, ''); //RegExp
    return hashedValue;
};
exports.hashString = hashString;
const loadBooks = () => {
    const fileNames = fs_1.default.readdirSync('books/');
    const books = fileNames.map((bookFileName) => {
        const rawData = fs_1.default.readFileSync('books/' + bookFileName);
        const book = JSON.parse(rawData.toString());
        return book;
    });
    return books;
};
exports.loadBooks = loadBooks;
const hashLoginDetails = (email, password) => {
    const hashedEmail = (0, exports.hashString)(email);
    const hashedPassword = (0, exports.hashString)(password);
    const saltedHashedPassword = (0, exports.hashString)(hashedPassword + hashedEmail);
    return [hashedEmail, saltedHashedPassword];
};
exports.hashLoginDetails = hashLoginDetails;
