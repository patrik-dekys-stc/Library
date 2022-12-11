"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.accessKeys = void 0;
const body_parser_1 = require("body-parser");
const express_1 = __importDefault(require("express"));
const BookAddEndpoint_1 = require("./src/BookAddEndpoint");
const utils_1 = require("./src/utils");
const Registration_1 = require("./src/auth/Registration");
const Login_1 = require("./src/auth/Login");
const app = (0, express_1.default)();
const PORT = 3000;
const loadedBooks = (0, utils_1.loadBooks)();
BookAddEndpoint_1.books.push(...loadedBooks);
app.use((0, body_parser_1.json)());
app.get('/api/library/list', (req, res) => {
    res.send(BookAddEndpoint_1.books);
});
app.post('/api/library/book/add', (req, res) => {
    (0, BookAddEndpoint_1.BookAdd)(req, res);
});
app.post('/api/auth/register', (req, res) => {
    (0, Registration_1.Register)(req, res);
});
app.post('/api/auth/login', (req, res) => {
    (0, Login_1.Login)(req, res);
});
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
exports.accessKeys = [];
