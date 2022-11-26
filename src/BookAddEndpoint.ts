import { book } from './types'

export const books: Array<book> = []

export const BookAdd = (req: any, res: any) => {
    const body = req.body
    if ('name' in body && 'author' in body && 'genre' in body && 'year' in body && 'publishers' in body && 'country' in body && 'pages' in body){
      books.push(body)
      console.log(body)
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
