import Link from 'next/link'
import { IPost } from 'src/service/PostService'
import styles from './PostCard.module.css'

interface PostCardProps extends IPost {}
const PostCard = (props: PostCardProps) => {
    const { id, title, description } = props
    return (
        <Link key={id} href={`/${id}`}>
            <a className={styles.card}>
                <h2>{title} </h2>
                <p>{description}</p>
            </a>
        </Link>
    )
}

export default PostCard
