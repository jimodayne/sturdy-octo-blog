import { Card, Form } from 'antd'
import dynamic from 'next/dynamic'
import { useCallback } from 'react'
import CMSLayout from 'src/components/CMSLayout'
import PostService, { IPost } from 'src/service/PostService'
import { asyncAction } from 'src/utils'
// import PostForm from 'src/components/PostForm'

const PostForm = dynamic(() => import('src/components/PostForm'), {
    ssr: false,
})

const CMSPostNew = () => {
    const [form] = Form.useForm()

    const handleCreate = useCallback(async (values: IPost) => {
        asyncAction('Create post', () => PostService.create(values))
    }, [])

    return (
        <CMSLayout>
            <Card title="Post Create">
                <PostForm handleSubmit={handleCreate} form={form} />
            </Card>
        </CMSLayout>
    )
}

export default CMSPostNew
