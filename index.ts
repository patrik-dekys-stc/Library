import { json } from 'body-parser'
import express from 'express'
import { BookAdd, books } from './src/BookAddEndpoint'
import fs from 'fs'

const app = express()
const PORT = 3000

app.use(json())

app.get('/api/library/list', (req, res) => {
    res.send(books)
})

app.post('/api/library/book/add', (req, res) => {
    BookAdd(req, res)
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })
  