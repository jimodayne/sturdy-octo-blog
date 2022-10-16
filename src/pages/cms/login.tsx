import { Button, Form, Input } from 'antd'
import 'antd/dist/antd.css'
import useAuth, { UserRequest } from 'src/hooks/useAuth'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAsyncFn } from 'react-use'
import Link from 'next/link'

const LoginView = () => {
    const { login, user, loading } = useAuth()
    const [state, cb] = useAsyncFn(login)

    const router = useRouter()

    const onFinish = async ({ email, password }: UserRequest) => {
        cb(email, password)
    }

    useEffect(() => {
        if (user) {
            router.push('/cms/posts')
        }
    }, [user])

    return (
        <>
            <Link href="/">
                <button className="absolute right-4 top-4 border-2 border-slate-900  px-4 py-2 rounded text-black ">
                    To Homepage
                </button>
            </Link>
            <div style={{ background: 'white', paddingTop: '10vh' }}>
                <h1
                    style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: '48px',
                        marginBottom: '24px',
                    }}
                >
                    CMS Login
                </h1>
                <div style={{ width: '600px', margin: 'auto' }}>
                    <Form
                        name="basic"
                        layout="vertical"
                        // labelCol={{ span: 4 }}
                        // wrapperCol={{ span: 8 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        //   onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
                            <Button
                                loading={state.loading || loading}
                                type="primary"
                                htmlType="submit"
                            >
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default LoginView
