import { json } from 'body-parser'
import express from 'express'
import { BookAdd, books } from './src/BookAddEndpoint'
import { loadBooks } from './src/utils'
import { book } from './src/types'
import { Register } from './src/auth/Registration'
import { Login } from './src/auth/Login'
import { Search } from './src/search/search'

const app = express()
const PORT = 3000

const loadedBooks: book[] = loadBooks()
books.push(...loadedBooks)

app.use(json())

app.get('/api/library/list', (req, res) => {
    res.send(books)
})

app.post('/api/library/book/add', (req, res) => {
    BookAdd(req, res)
})

app.post('/api/auth/register', (req, res) => {
    Register(req, res)
})

app.post('/api/auth/login', (req, res) => {
    Login(req, res)
})

app.get('/api/library/search', (req, res) => {
    Search(req, res)
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })
  
export let accessKeys: string[] = []
