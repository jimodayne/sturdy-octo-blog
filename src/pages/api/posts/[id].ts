// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { auth, db, admin } from 'src/utils/firebase/backend'
// import { Timestamp } from 'firebase/firestore'
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
        const authorization = req.headers.authorization
        const token = authorization?.split(' ')[1]

        if (!token) {
            res.status(401).json({ message: 'Unauthorized', code: 401, data: null })
            return
        }
        // const result = await auth.verifyIdToken(token)
        // console.log('result !>> ', result)

        // if (!uid) {
        //     res.status(401).json({
        //         data: null,
        //         message: 'Unauthorized',
        //         code: 401,
        //     })
        //     return
        // }
    }

    if (method === 'PUT') {
        // Update post detail to database
        // const docRef = doc(db, 'posts', req.query.id as string)
        await db
            .collection('posts')
            .doc(req.query.id as string)
            .update({ ...req.body, updatedAt: admin.firestore.FieldValue.serverTimestamp() })
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
