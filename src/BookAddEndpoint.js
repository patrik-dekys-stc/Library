"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookAdd = exports.books = void 0;
const fs_1 = __importDefault(require("fs"));
const utils_1 = require("./utils");
exports.books = [];
const BookAdd = (req, res) => {
    const body = req.body;
    if ('name' in body && 'author' in body && 'genre' in body && 'year' in body && 'publishers' in body && 'country' in body && 'pages' in body) {
        exports.books.push(body);
        console.log(body);
        //Zápis do súboru
        const book = body;
        if (!fs_1.default.existsSync('books')) {
            fs_1.default.mkdirSync('books');
        }
        const hashedName = (0, utils_1.hashString)(book.name.toLowerCase().replace(' ', '') + book.year + book.publishers.toLowerCase().replace(' ', '') + body.pages); //Poznámka: čo ak book.(hodnota) je array a nie string samotný?
        const stringifiedBook = JSON.stringify(body);
        console.log(hashedName);
        fs_1.default.writeFileSync('books/' + hashedName + '.json', stringifiedBook);
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
