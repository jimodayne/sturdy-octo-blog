import Link from 'next/link'
import { IPost } from 'src/service/PostService'

interface PostCardProps extends IPost {}
const PostCard = (props: PostCardProps) => {
    const { id, title, description } = props
    return (
        <Link key={id} href={`/${id}`}>
            <div className="mb-8 cursor-pointer">
                <h2 className="font-bold text-lg  text-slate-800 dark:text-slate-200 lg:text-xl mt-0 mb-2">
                    {title}
                </h2>
                <p className="text-sm lg:text-base text-slate-500 dark:text-slate-400 ">
                    {description}
                </p>
            </div>
        </Link>
    )
}

export default PostCard
