const isDev = process.env.NODE_ENV !== 'production'

export const DOMAIN_API_URL = isDev
    ? 'http://localhost:3000/api'
    : 'https://sturdy-octo-blog.vercel.app/api'

export interface ResponseData<T> {
    data: T
    message: string
    total?: number
    code: number
}

export const PAGE_SIZE = 10
