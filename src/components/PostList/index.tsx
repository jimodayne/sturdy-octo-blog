import { IPost } from 'src/service/PostService'
import PostCard from '../PostCard'

interface PostListProps {
    posts: IPost[]
}

const PostList = (props: PostListProps) => {
    const { posts } = props
    if (!posts?.length) return null

    return (
        <div>
            {posts?.map(post => (
                <PostCard key={post.id} {...post} />
            ))}
        </div>
    )
}

export default PostList
