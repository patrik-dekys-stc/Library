import { book } from './types'

export const books: Array<book> = []

export const BookAdd = (req: any, res: any) => {
    const body = req.body
    books.push(body)
    console.log(body)
    res.sendStatus(200)
} 

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
