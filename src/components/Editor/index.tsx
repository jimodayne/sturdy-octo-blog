import { CKEditor } from 'ckeditor4-react'

interface MyEditorProps {
    value?: string
    onChange?: (value: string) => void
}

export default function MyEditor(props: MyEditorProps) {
    const { value = '', onChange } = props

    return (
        <div className="post-content-wrapper">
            <CKEditor
                initData={value}
                onChange={evt => {
                    const data = evt.editor.getData()
                    onChange && onChange(data)
                }}
            />
        </div>
    )
}
