import { PropsWithChildren } from 'react'
import 'antd/dist/antd.css'
import { FileOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Layout, Menu, Card } from 'antd'

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

const CMSLayout = (props: PropsWithChildren) => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content className="m-4">
                    {props.children}
                </Content>
            </Layout>
        </Layout>
    )
}

export default CMSLayout
