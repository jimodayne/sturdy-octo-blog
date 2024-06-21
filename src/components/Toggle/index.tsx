import { Switch } from 'antd'

interface ToggleProps {
    value?: boolean
    onChange?: (value: boolean) => void
}

const Toggle = (props: ToggleProps) => {
    const { value, onChange } = props
    return <Switch checked={value} onChange={onChange} />
}

export default Toggle
