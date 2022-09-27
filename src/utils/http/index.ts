import { DOMAIN_API_URL, ResponseData } from 'src/constants'

export const buildParams = (data?: any) => {
    if (data) {
        const dataEdited = {
            ...data,
        }

        let queryData = {} as any
        try {
            queryData = Object.fromEntries(
                Object.entries(dataEdited).filter(([_, v]) => v != null && v !== '' && v !== -1),
            )
        } catch (err) {
            console.error('Something went wrong: ', err)
        }

        return Object.keys(queryData)
            .map(key => {
                if (Array.isArray(queryData[key])) {
                    return `${key}=[${queryData[key]}]`
                }
                if (typeof queryData[key] === 'object') {
                    return `${key}=${JSON.stringify(queryData[key])}`
                }
                return `${key}=${encodeURIComponent(queryData[key])}`
            })
            .join('&')
    }
    return ''
}
export const buildURLWithParam = (url: string, query?: any) => {
    if (!query) return url
    return url + '?' + buildParams(query)
}

export function localFetch(url: string, params?: {}, options?: {}): Promise<ResponseData<any>> {
    const exOptions = { credentials: 'include', ...options } as any

    const urlWithParam = buildURLWithParam(url, params)
    return fetch(urlWithParam, exOptions).then(toJson).then(validResp)
}

export const getWithUrl = (url: string, params?: {}, options?: {}) => {
    return localFetch(url, params, options)
}

export const getWithPath = (path: string, params?: {}, options?: {}) => {
    return getWithUrl(DOMAIN_API_URL + path, params, options)
}

export const toJson = (response: Response) => {
    return response.json()
}

export const validResp = <T>(resp: ResponseData<T>) => {
    if (!resp || resp.code !== 0) {
        return Promise.reject(resp)
    }
    return Promise.resolve(resp)
}
