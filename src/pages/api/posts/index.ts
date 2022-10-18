// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { auth, db } from 'src/utils/firebase/backend'

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
        const postsSnapshot = await db
            .collection('posts')
            .orderBy('createdAt', 'desc')
            .limit(10)
            .get()

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
        const authorization = req.headers.authorization
        const token = authorization?.split(' ')[1]
        if (!token) {
            res.status(401).json({
                data: null,
                message: 'Unauthorized',
                code: 401,
            })
            return
        }
        // TODO: verify token using firebase admin
        const { uid } = await auth.verifyIdToken(token)
        if (!uid) {
            res.status(401).json({
                data: null,
                message: 'Unauthorized',
                code: 401,
            })
            return
        }

        const { title, content, description, source, status } = req.body as IPost
        await db.collection('posts').add({
            title: title || '',
            content: content || '',
            source: source || '',
            status: status || false,
            description: description || '',
            createdAt: Timestamp.fromDate(new Date()),
        })
        res.status(200).json({ message: 'success', code: 0, data: req.body })
    }
}
