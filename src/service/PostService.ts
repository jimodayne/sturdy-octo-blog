import { ResponseData } from 'src/constants'
import { getWithPath, postWithPath, putWithPath } from 'src/utils/http'

export interface IPost {
    content: string
    title: string
    id: string
    description: string
}

const PostService = {
    getList: async (params?: object): Promise<ResponseData<IPost[]>> => {
        return await getWithPath('/posts', params)
    },
    getDetail: async (id: string): Promise<ResponseData<IPost>> => {
        return await getWithPath(`/posts/${id}`)
    },
    updateDetail: async (id: string, data: IPost): Promise<ResponseData<IPost>> => {
        return await putWithPath(`/posts/${id}`, {}, data)
    },
    create: async (data: IPost): Promise<ResponseData<IPost>> => {
        return await postWithPath('/posts', {}, data)
    },
}

export default PostService
