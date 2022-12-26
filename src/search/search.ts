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
    } else if(searchQuery.type === 'publisher') {
        const foundBooks = searchPublisher(searchQuery.query)

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


