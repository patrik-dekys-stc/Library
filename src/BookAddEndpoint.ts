import { book } from './types'

export const books: Array<book> = []

export const BookAdd = (req: any, res: any) => {
    const body = req.body
    books.push(body)
    res.sendStaus(200)
} 