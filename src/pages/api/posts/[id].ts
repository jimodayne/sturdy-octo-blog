// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from 'src/utils/firebase'
import { doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore'
import { ResponseData } from 'src/constants'

type Data = {
    name: string
}

// const db = getFirestore();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData<any>>,
) {
    const { method } = req
    if (method === 'GET') {
        // GET post detail from database
        const docRef = doc(db, 'posts', req.query.id as string)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
            res.status(200).json({
                data: docSnap.data(),
                message: 'success',
                code: 0,
            })
        } else {
            res.status(404).json({ message: 'No such document!', code: 404, data: null })
        }
    }
    if (method === 'POST') {
    }
    if (method === 'PUT') {
        // Update post detail to database
        const docRef = doc(db, 'posts', req.query.id as string)
        await updateDoc(docRef, req.body)
        res.status(200).json({ message: 'success', code: 0, data: req.body })
    }
}
