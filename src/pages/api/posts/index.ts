// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from 'src/utils/firebase'
import { collection, doc, getDocs, getFirestore, setDoc, addDoc } from 'firebase/firestore'
import { ResponseData } from 'src/constants'

type Data = {
    name: string
}

// const db = getFirestore()

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData<any>>,
) {
    const { method } = req
    if (method === 'GET') {
        // GET post from database
        const postsCol = collection(db, 'posts')
        const postsSnapshot = await getDocs(postsCol)
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
        const { title, content, description } = req.body
        const postsCol = collection(db, 'posts')
        await addDoc(postsCol, {
            title,
            content,
            description,
        })
        res.status(200).json({ message: 'success', code: 0, data: req.body })
    }
}
