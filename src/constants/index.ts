export const DOMAIN_API_URL = 'http://localhost:3000/api'

export interface ResponseData<T> {
    data: T
    message: string
    total?: number
    code: number
}
