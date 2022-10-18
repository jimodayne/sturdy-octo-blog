export const DOMAIN_API_URL = '/api'

export interface ResponseData<T> {
    data: T
    message: string
    total?: number
    code: number
}

export const PAGE_SIZE = 10
