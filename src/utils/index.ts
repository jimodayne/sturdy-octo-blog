import { message } from 'antd'

export const asyncAction = (title: string, action: Function) => {
    return action()
        .then(() => {
            message.success(title + ' success')
        })
        .catch(() => {
            message.error(title + ' failed')
        })
}
