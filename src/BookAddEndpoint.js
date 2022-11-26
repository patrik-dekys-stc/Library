"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookAdd = exports.books = void 0;
exports.books = [];
const BookAdd = (req, res) => {
    console.log(req.body);
    //const body = req.body
    //books.push(body)
    //res.sendStaus(200)
};
exports.BookAdd = BookAdd;
/* example of input
{
    'name' : 'Hobit',
    'author' : ['J.R.R. Tolkien'],
    'genre': ['Fantasy'],
    'year': 1998,
    'publishers' : 'Ikar',
    'country' : 'USA',
    'pages': 350,
  }
*/
