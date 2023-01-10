import { query } from "express"
import { books } from "../BookAddEndpoint"
import { book, SearchType } from "../types"

export const Search = (req: any, res: any) => {
    const query = req.query
    
    const searchQuery: SearchType = query
    console.log(searchQuery)

    if(searchQuery.type === 'author') {
        const foundBooks = searchAuthor(searchQuery.query)

        res.json(foundBooks)
    } else if(searchQuery.type === 'name') {
        const foundBooks = searchName(searchQuery.query)

        res.json(foundBooks)
    } else if(searchQuery.type === 'publishers') {
        const foundBooks = searchPublisher(searchQuery.query)

        res.json(foundBooks)
    } else if(searchQuery.type === 'description') {
        const foundBooks = searchDiscription(searchQuery.query)

        res.json(foundBooks)
    } else {
        res.sendStatus(501)
    }
} 

const searchAuthor = (query: string): book[] => {
    const lowQuery = query.toLowerCase()

    let foundBooks: book[] = []
    for(let book of books) {
        if ((book.author).join('; ').toLowerCase().includes(lowQuery)) {
            foundBooks.push(book)
        }
    }

    return foundBooks
}

const searchName = (query: string) => {
    const lowQuery = query.toLowerCase()

    let foundBooks: book[] = []
    for(let book of books) {
        if (book.name.toLowerCase().includes(lowQuery)) {
            foundBooks.push(book)
        }
    }

    return foundBooks
}

const searchPublisher = (query: string) => {
    const lowQuery = query.toLowerCase()

    let foundBooks: book[] = []
    for(let book of books) {
        if (book.publishers.toLowerCase().includes(lowQuery)) {
            foundBooks.push(book)
        }
    }

    return foundBooks
}

const searchDiscription = (query: string) => {
    const lowQuery = query.toLowerCase()

    const queryArray: string[] = lowQuery.split(' ')

    let foundBooks: [book, number][] = []
    for(let book of books) {
        let score: number = 0
        let desc = String(book.description).toLowerCase()
        
        
        for(let queryElement of queryArray) {
            if (desc.includes(queryElement)) {
                score += 1
            }
        }

        if(score >  0 ) {
            foundBooks.push([book, score])
        }
    }
    
    let sortedFoundBooks = foundBooks.sort((value1: [book, number], value2: [book, number]) => {
        return value2[1] - value1[1]
    }).map((value: [book, number]) => value[0])
    sortedFoundBooks.length = 5
    return sortedFoundBooks
}
