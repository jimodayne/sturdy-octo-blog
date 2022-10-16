import { message } from 'antd'
import dayjs from 'dayjs'

export const asyncAction = (title: string, action: Function) => {
    return action()
        .then(() => {
            message.success(title + ' success')
        })
        .catch(() => {
            message.error(title + ' failed')
        })
}

export const formatDate = (timestramp?: { seconds: number; nanoseconds: number }) => {
    if (!timestramp) return ''
    return dayjs(timestramp.seconds * 1000).format('D.M.YYYY HH:mm:ss')
}
