// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from 'src/utils/firebase'
import {
    collection,
    getDocs,
    addDoc,
    Timestamp,
    query,
    orderBy,
    limit,
    startAt,
} from 'firebase/firestore'
import { PAGE_SIZE, ResponseData } from 'src/constants'
import { IPost } from 'src/service/PostService'

const postConverter = {
    toFirestore: (post: IPost) => {
        return post
    },
    fromFirestore: (snapshot: any, options: any): Partial<IPost> => {
        const data = snapshot.data(options)
        return {
            id: snapshot.id,
            title: data.title,
            description: data.description,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt,
        }
    },
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData<any>>,
) {
    const { method } = req
    if (method === 'GET') {
        // GET post from database
        const page = req.query.page ? Number(req.query.page) : 1
        const postsCol = collection(db, 'posts')
        const q = query(
            postsCol,
            orderBy('createdAt', 'desc'),
            limit(10),
            // startAt(0),
        ).withConverter(postConverter)
        const postsSnapshot = await getDocs(q)
        const postsList = postsSnapshot.docs.map(doc => {
            return {
                ...doc.data(),
                id: doc.id,
            }
        })

        res.status(200).json({
            data: postsList,
            message: 'success',
            total: postsSnapshot.size,
            code: 0,
        })
    }
    if (method === 'POST') {
        // Create new post
        const { title, content, description, source, status } = req.body as IPost
        const postsCol = collection(db, 'posts')
        await addDoc(postsCol, {
            title,
            content,
            source,
            status,
            description,
            createdAt: Timestamp.fromDate(new Date()),
        })
        res.status(200).json({ message: 'success', code: 0, data: req.body })
    }
}
