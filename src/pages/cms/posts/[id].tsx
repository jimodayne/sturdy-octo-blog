import { Card, Form, Input } from 'antd'
import CMSLayout from 'src/components/CMSLayout'

const CMSPostDetail = () => {
    const [form] = Form.useForm()
    return (
        <CMSLayout>
            <Card title="Post Detail">
                <Form
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 16 }}
                    autoComplete="off"
                    form={form}
                >
                    <Form.Item label="Title" name="title">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Description" name="description">
                        <Input />
                    </Form.Item>
                </Form>
            </Card>
        </CMSLayout>
    )
}

export default CMSPostDetail
