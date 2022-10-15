import { Card, Form, Input, Button } from 'antd'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useCallback, useEffect } from 'react'
import { useAsyncFn } from 'react-use'
import CMSLayout from 'src/components/CMSLayout'
import PostService, { IPost } from 'src/service/PostService'
import { asyncAction } from 'src/utils'

const Editor: any = dynamic(() => import('src/components/Editor'), {
    ssr: false,
})

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

    const handleSave = useCallback(
        async (values: IPost) => {
            asyncAction('Update post', () => PostService.updateDetail(id, values))
        },
        [id],
    )

    return (
        <CMSLayout>
            <Card title="Post Detail">
                <Form
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 16 }}
                    autoComplete="off"
                    onFinish={handleSave}
                    form={form}
                >
                    <Form.Item label="Title" name="title">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Description" name="description">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Content" name="content">
                        <Editor />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Save
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </CMSLayout>
    )
}

export default CMSPostDetail
