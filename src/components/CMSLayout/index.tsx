import { PropsWithChildren, useEffect, useState } from 'react'
import 'antd/dist/antd.css'
import { FileOutlined } from '@ant-design/icons'
import { Button, MenuProps } from 'antd'
import { Layout, Menu } from 'antd'
import Link from 'next/link'
import useAuth from 'src/hooks/useAuth'
import { useRouter } from 'next/router'
import Loading from '../Loading'
import Head from 'next/head'

const { Header, Content, Sider } = Layout

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem
}

const items: MenuItem[] = [getItem('Posts', '1', <FileOutlined />)]

interface CMSLayoutProps {
    children: PropsWithChildren<React.ReactNode>
    hasSider?: boolean
    hasHeader?: boolean
}

const CMSLayout = (props: CMSLayoutProps) => {
    const { hasSider = true, hasHeader = true, children } = props
    const { loading, user, logout } = useAuth()

    const [domLoaded, setDomLoaded] = useState(false)

    useEffect(() => {
        setDomLoaded(true)
    }, [])

    const router = useRouter()

    useEffect(() => {
        if (loading) return
        if (!user) router.push('/cms/login')
    }, [loading])

    const handleLogout = () => {
        logout()
        router.push('/cms/login')
    }

    return (
        <>
            <Head>
                <title>Sturdy Octo Blog CMS</title>
            </Head>
            {domLoaded && (
                <Layout style={{ minHeight: '100vh' }}>
                    {loading && <Loading />}
                    {hasSider && (
                        <Sider>
                            <div className="logo" />
                            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                                <Menu.Item key={'1'}>
                                    <Link href="/cms/posts">Posts</Link>
                                </Menu.Item>
                            </Menu>
                        </Sider>
                    )}
                    <Layout className="site-layout">
                        {hasHeader && (
                            <Header className="flex justify-end items-center px-2    site-layout-background">
                                <Button type="primary" danger ghost onClick={handleLogout}>
                                    Logout
                                </Button>
                            </Header>
                        )}
                        <Content className="m-4">{props.children}</Content>
                    </Layout>
                </Layout>
            )}
        </>
    )
}

export default CMSLayout
