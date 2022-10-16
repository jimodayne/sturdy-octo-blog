import { Form, Input, Button, FormInstance, Switch } from 'antd'
import dynamic from 'next/dynamic'
import { IPost } from 'src/service/PostService'
import Toggle from '../Toggle'

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
            <Form.Item
                label="Title"
                name="title"
                rules={[{ required: true, message: 'Please input title' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Description"
                name="description"
                rules={[{ required: true, message: 'Please input description' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item label="Status" name="status">
                <Toggle />
            </Form.Item>
            <Form.Item label="Source" name="source">
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
