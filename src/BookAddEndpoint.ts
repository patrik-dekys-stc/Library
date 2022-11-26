import { book } from './types'

export const books: Array<book> = []

export const BookAdd = (req: any, res: any) => {
    const body = req.body
    if (body as typeof books){
        books.push(body)
        res.sendStaus(200)
    }
    else{
        res.sendstatus(404)
        console.log()
        console.log('NESPRÁVNE ZADANÝ VSTUP!')
        console.log()
    }
} 
