export type book = {
    name : string,
    author: Array<string>,
    genre: Array<string>,
    year: number,
    publishers: string,
    country: string,
    pages: number
}

export type AuthBook = {
    key: string
    book: book
}

export type RegisterType = {
    name : string,
    surname: string,
    email: string,
    password: string
}

export type LoginType = {
    email: string,
    password: string
}
