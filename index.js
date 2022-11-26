"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const BookAddEndpoint_1 = require("./src/BookAddEndpoint");
const app = (0, express_1.default)();
const PORT = 3000;
app.get('/api/library/list', (req, res) => {
    res.send(BookAddEndpoint_1.books);
});
app.post('/api/library/book/add', (req, res) => {
    (0, BookAddEndpoint_1.BookAdd)(req, res);
});
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
