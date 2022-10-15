import { Card, Form } from 'antd'
import { useRouter } from 'next/router'
import { useCallback, useEffect } from 'react'
import { useAsyncFn } from 'react-use'
import CMSLayout from 'src/components/CMSLayout'
import PostForm from 'src/components/PostForm'
import PostService, { IPost } from 'src/service/PostService'
import { asyncAction } from 'src/utils'

const CMSPostDetail = () => {
    const [form] = Form.useForm()
    const { id } = useRouter().query as { id: string }
    const [state, cb] = useAsyncFn(PostService.getDetail)

    useEffect(() => {
        id && cb(id)
    }, [id])

    useEffect(() => {
        if (state.value?.data) {
            console.log('state', state.value?.data)
            form.setFieldsValue(state.value?.data)
        }
    }, [state.value])

    const handleUpdate = useCallback(
        async (values: IPost) => {
            asyncAction('Update post', () => PostService.updateDetail(id, values))
        },
        [id],
    )

    return (
        <CMSLayout>
            <Card title="Post Detail">
                <PostForm handleSubmit={handleUpdate} form={form} />
            </Card>
        </CMSLayout>
    )
}

export default CMSPostDetail
