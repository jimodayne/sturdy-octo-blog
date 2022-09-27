import { ResponseData } from 'src/constants'
import { getWithPath } from 'src/utils/http'

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
}

export default PostService
