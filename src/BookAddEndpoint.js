"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookAdd = exports.books = void 0;
const fs_1 = __importDefault(require("fs"));
const utils_1 = require("./utils");
const __1 = require("..");
exports.books = [];
const BookAdd = (req, res) => {
    const body = req.body;
    const authBook = body;
    const book = authBook.book;
    console.log(authBook.key);
    console.log(__1.accessKeys);
    if (!__1.accessKeys.includes(authBook.key)) {
        res.sendStatus(401);
        return;
    }
    if (!fs_1.default.existsSync('books')) {
        fs_1.default.mkdirSync('books');
    }
    exports.books.push(body);
    const stringifiedBook = JSON.stringify(body.book);
    const hashedName = (0, utils_1.hashString)(book.name.toLowerCase().replace(' ', '') + book.year + book.publishers.toLowerCase().replace(' ', '') + book.pages); //Poznámka: čo ak book.(hodnota) je array a nie string samotný?
    console.log(hashedName);
    fs_1.default.writeFileSync('books/' + hashedName + '.json', stringifiedBook); //Zápis do súboru
    res.sendStatus(200);
};
exports.BookAdd = BookAdd;
/* example of input object
{
  "key": "................",
  "book": {
    "name" : "Hobit",
    "author" : ["J.R.R. Tolkien"],
    "genre": ["Fantasy"],
    "year": 1937,
    "publishers" : "Slovart",
    "country" : "USA",
    "pages": 350
  }
}
*/ 
