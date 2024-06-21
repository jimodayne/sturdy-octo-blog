import { ResponseData } from 'src/constants'
import { getWithPath, postWithPath, putWithPath } from 'src/utils/http'

export type PostStatus = 'draft' | 'published' | 'deleted'
export interface IPost {
    content: string
    title: string
    id: string
    description: string
    source: string
    createdAt: string
    updatedAt: string
    status: PostStatus
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
    delete: async (id: string): Promise<ResponseData<null>> => {
        return await postWithPath(`/posts/${id}`)
    },
}

export default PostService
