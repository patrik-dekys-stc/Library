"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Search = void 0;
const BookAddEndpoint_1 = require("../BookAddEndpoint");
const Search = (req, res) => {
    const query = req.query;
    const searchQuery = query;
    console.log(searchQuery);
    if (searchQuery.type === 'author') {
        const foundBooks = searchAuthor(searchQuery.query);
        res.json(foundBooks);
    }
    else if (searchQuery.type === 'name') {
        const foundBooks = searchName(searchQuery.query);
        res.json(foundBooks);
    }
    else if (searchQuery.type === 'publishers') {
        const foundBooks = searchPublisher(searchQuery.query);
        res.json(foundBooks);
    }
    else if (searchQuery.type === 'descrition') {
        res.sendStatus(404);
    }
    else {
        res.sendStatus(501);
    }
};
exports.Search = Search;
const searchAuthor = (query) => {
    const lowQuery = query.toLowerCase();
    let foundBooks = [];
    for (let book of BookAddEndpoint_1.books) {
        if ((book.author).join('; ').toLowerCase().includes(lowQuery)) {
            foundBooks.push(book);
        }
    }
    return foundBooks;
};
const searchName = (query) => {
    const lowQuery = query.toLowerCase();
    let foundBooks = [];
    for (let book of BookAddEndpoint_1.books) {
        if (book.name.toLowerCase().includes(lowQuery)) {
            foundBooks.push(book);
        }
    }
    return foundBooks;
};
const searchPublisher = (query) => {
    const lowQuery = query.toLowerCase();
    let foundBooks = [];
    for (let book of BookAddEndpoint_1.books) {
        if (book.publishers.toLowerCase().includes(lowQuery)) {
            foundBooks.push(book);
        }
    }
    return foundBooks;
};
