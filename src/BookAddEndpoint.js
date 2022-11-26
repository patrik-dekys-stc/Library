"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookAdd = exports.books = void 0;
exports.books = [];
const BookAdd = (req, res) => {
    const body = req.body;
    if ('name' in body && 'author' in body && 'genre' in body && 'year' in body && 'publishers' in body && 'country' in body && 'pages' in body) {
        exports.books.push(body);
        console.log(body);
        res.sendStatus(200);
    }
    else {
        console.log('ZADANÝ VTUP JE NESPRÁVNEHO FORMÁTU');
        res.sendStatus(400);
    }
};
exports.BookAdd = BookAdd;
/* example of input object
{
    "name" : "Hobit",
    "author" : ["J.R.R. Tolkien"],
    "genre": ["Fantasy"],
    "year": 1937,
    "publishers" : "Slovart",
    "country" : "USA",
    "pages": 350
  }
*/
