"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookAdd = exports.books = void 0;
exports.books = [];
const BookAdd = (req, res) => {
    const body = req.body;
    if (typeof body === 'object') {
        exports.books.push(body);
        console.log(body);
        res.sendStatus(200);
    }
    else {
        console.log('ZADANÝ VTUP JE NESPRÁVNEHO FORMÁTU');
        res.sendStatus(404);
    }
};
exports.BookAdd = BookAdd;
/* example of input
{
    "name" : "Hobit",
    "author" : ["J.R.R. Tolkien"],
    "genre": ["Fantasy"],
    "year": 1998,
    "publishers" : "Ikar",
    "country" : "USA",
    "pages": 350
  }
*/
