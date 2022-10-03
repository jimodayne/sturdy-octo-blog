import { Card, Table } from 'antd'
import { useEffect } from 'react'
import { useAsyncFn } from 'react-use'
import CMSLayout from 'src/components/CMSLayout'
import PostService from 'src/service/PostService'

const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',

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
];

const CMSPostsView = () => {
    const [state, cb] = useAsyncFn(PostService.getList)

    useEffect(() => {
        cb()
    }, [])


    return (
        <CMSLayout>
            <Card title="Post List">
                <div className='mb-4'>Total {state.value?.data?.length.toLocaleString() || 0} posts</div>
                <Table dataSource={state.value?.data} columns={columns} />
            </Card>

        </CMSLayout>
    )
}

export default CMSPostsView
