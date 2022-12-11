import crypto from 'crypto-js'
import Base64 from 'crypto-js/enc-base64'
import { book } from './types'
import fs from 'fs'


export const hashString = (value: string): string => {
    let hashedValue = Base64.stringify(crypto.SHA256(value))
    hashedValue = hashedValue.replace('/','').replace('/\\/', '')
    return hashedValue
}

export const loadBooks = (): book[] => {
    const fileNames: string[] = fs.readdirSync('books/')
    const books: book[] = fileNames.map((bookFileName: string) => {
        const rawData = fs.readFileSync('books/' + bookFileName)
        const book: book = JSON.parse(rawData.toString())
        return book
    })
    return books
}

export const hashLoginDetails = (email: string, password: string): [string, string] => {
    const hashedEmail = hashString(email)
    const hashedPassword = hashString(password)
    const saltedHashedPassword = hashString(hashedPassword + hashedEmail)

    return [hashedEmail, saltedHashedPassword]
}