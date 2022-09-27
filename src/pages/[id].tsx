import { GetServerSideProps } from 'next/types'
import PostService, { IPost } from 'src/service/PostService'

interface PostDetailProps {
    post: IPost
}
const PostDetail = (props: PostDetailProps) => {
    const { post } = props
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
            <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async context => {
    const id = context.params?.id as string
    const { data } = await PostService.getDetail(id)
    return { props: { post: data } }
}

export default PostDetail
