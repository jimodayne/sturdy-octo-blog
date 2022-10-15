import React, { useState, useEffect, useRef } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

interface MyEditorProps {
    value: string
    onChange: (value: string) => void
}

export default function MyEditor(props: MyEditorProps) {
    const { value, onChange } = props

    return (
        <CKEditor
            editor={ClassicEditor}
            data={value}
            onChange={(event: any, editor: any) => {
                const data = editor.getData()
                // console.log({ event, editor, data })
                onChange(data)
            }}
        />
    )
}
