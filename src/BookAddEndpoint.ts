import { AuthBook, book } from './types'
import fs from 'fs'
import { hashString } from './utils'
import { accessKeys } from '..'

export const books: Array<book> = []

export const BookAdd = (req: any, res: any) => {
    const body = req.body
      const authBook: AuthBook = body
      const book = authBook.book

      console.log(authBook.key)
      console.log(accessKeys)
      if (!accessKeys.includes(authBook.key)) {
        res.sendStatus(401)
        return 
      }

      if (!fs.existsSync('books')) {
        fs.mkdirSync('books')
      }

      books.push(body)

      const stringifiedBook = JSON.stringify(body)

      const hashedName = hashString(book.name.toLowerCase().replace(' ', '') + book.year + book.publishers.toLowerCase().replace(' ', '') + book.pages) //Poznámka: čo ak book.(hodnota) je array a nie string samotný?
      console.log(hashedName)

      fs.writeFileSync('books/' + hashedName + '.json', stringifiedBook) //Zápis do súboru

      res.sendStatus(200)
} 

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
