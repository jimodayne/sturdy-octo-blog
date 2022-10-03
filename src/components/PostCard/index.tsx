import Link from 'next/link'
import { IPost } from 'src/service/PostService'
import styles from './PostCard.module.css'

interface PostCardProps extends IPost {}
const PostCard = (props: PostCardProps) => {
    const { id, title, description } = props
    return (
        <Link key={id} href={`/${id}`}>
            <div className="mb-6 cursor-pointer">
                <h2 className="font-bold text-xl">{title} </h2>
                <p>{description}</p>
            </div>
        </Link>
    )
}

export default PostCard
