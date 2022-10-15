import { Form, Input, Button, FormInstance } from 'antd'
import dynamic from 'next/dynamic'
import { IPost } from 'src/service/PostService'

interface PostFormProps {
    handleSubmit: (values: IPost) => void
    form: FormInstance<any>
}

const Editor: any = dynamic(() => import('src/components/Editor'), {
    ssr: false,
})

const PostForm = (props: PostFormProps) => {
    const { handleSubmit, form } = props

    return (
        <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 16 }}
            autoComplete="off"
            onFinish={handleSubmit}
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
    )
}

export default PostForm
