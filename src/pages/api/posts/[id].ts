// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { auth, db } from 'src/utils/firebase/backend'
import { Timestamp } from 'firebase/firestore'
import { ResponseData } from 'src/constants'

type Data = {
    name: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData<any>>,
) {
    const { method } = req
    if (method === 'GET') {
        const docSnap = await db
            .collection('posts')
            .doc(req.query.id as string)
            .get()

        if (docSnap.exists) {
            res.status(200).json({
                data: docSnap.data(),
                message: 'success',
                code: 0,
            })
        } else {
            res.status(404).json({ message: 'No such document!', code: 404, data: null })
        }
    } else {
        const token = req.headers.authorization
        if (!token) {
            res.status(401).json({ message: 'Unauthorized', code: 401, data: null })
            return
        }
        const { uid } = await auth.verifyIdToken(token)
        if (!uid) {
            res.status(401).json({
                data: null,
                message: 'Unauthorized',
                code: 401,
            })
            return
        }
    }

    if (method === 'PUT') {
        // Update post detail to database
        // const docRef = doc(db, 'posts', req.query.id as string)
        const docSnap = await db
            .collection('posts')
            .doc(req.query.id as string)
            .update({ ...req.body, updatedAt: Timestamp.fromDate(new Date()) })
        res.status(200).json({ message: 'success', code: 0, data: req.body })
    }
    if (method === 'DELETE') {
        // Delete post from database
        await db
            .collection('posts')
            .doc(req.query.id as string)
            .delete()
        res.status(200).json({ message: 'success', code: 0, data: null })
    }
}
