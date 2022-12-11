import { book } from './types'
import fs from 'fs'
import { hashString } from './utils'

export const books: Array<book> = []

export const BookAdd = (req: any, res: any) => {
    const body = req.body
    if ('name' in body && 'author' in body && 'genre' in body && 'year' in body && 'publishers' in body && 'country' in body && 'pages' in body){
      books.push(body)
      console.log(body)

      //Zápis do súboru
      const book: book = body

      if (!fs.existsSync('books')) {
        fs.mkdirSync('books')
      }

      const hashedName = hashString(book.name.toLowerCase().replace(' ', '') + book.year + book.publishers.toLowerCase().replace(' ', '') + body.pages)
      const stringifiedBook = JSON.stringify(body)
      console.log(hashedName)
      fs.writeFileSync('books/' + hashedName + '.json', stringifiedBook)

      res.sendStatus(200)
    }
    else {
      console.log('ZADANÝ VTUP JE NESPRÁVNEHO FORMÁTU')
      res.sendStatus(400)
    }
    
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
