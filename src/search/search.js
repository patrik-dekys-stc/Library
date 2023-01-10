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
    else if (searchQuery.type === 'description') {
        const foundBooks = searchDiscription(searchQuery.query);
        res.json(foundBooks);
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
const searchDiscription = (query) => {
    const lowQuery = query.toLowerCase();
    const queryArray = lowQuery.split(' ');
    let foundBooks = [];
    for (let book of BookAddEndpoint_1.books) {
        let score = 0;
        let desc = String(book.description).toLowerCase();
        for (let queryElement of queryArray) {
            if (desc.includes(queryElement)) {
                score += 1;
            }
        }
        if (score > 0) {
            foundBooks.push([book, score]);
        }
    }
    let sortedFoundBooks = foundBooks.sort((value1, value2) => {
        return value2[1] - value1[1];
    }).map((value) => value[0]);
    sortedFoundBooks.length = 5;
    return sortedFoundBooks;
};
