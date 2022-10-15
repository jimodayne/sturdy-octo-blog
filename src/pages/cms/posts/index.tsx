import { Button, Card, Table } from 'antd'
import Link from 'next/link'
import { useEffect } from 'react'
import { useAsyncFn } from 'react-use'
import CMSLayout from 'src/components/CMSLayout'
import PostService from 'src/service/PostService'

const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        render: (id: string) => (
            <Link href={`/cms/posts/${id}`}>
                <a>{id}</a>
            </Link>
        ),
    },
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
    },
]

const CMSPostsView = () => {
    const [state, cb] = useAsyncFn(PostService.getList)

    useEffect(() => {
        cb()
    }, [])

    return (
        <CMSLayout>
            <Card title="Post List">
                <div className="mb-4 flex justify-between items-center">
                    <p className="m-0">
                        Total {state.value?.data?.length.toLocaleString() || 0} posts
                    </p>
                    <Link href="/cms/posts/create">
                        <Button type="primary"> New Post </Button>
                    </Link>
                </div>
                <Table dataSource={state.value?.data} columns={columns} rowKey="id" />
            </Card>
        </CMSLayout>
    )
}

export default CMSPostsView
