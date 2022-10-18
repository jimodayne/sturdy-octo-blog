// global.d.ts
declare module globalThis {
    var EMULATORS_STARTED: boolean
    var uid: string
}

declare module '@ckeditor/ckeditor5-build-classic' {
    const ClassicEditorBuild: any

    export = ClassicEditorBuild
}
declare module '@ckeditor/ckeditor5-react' {
    const CKEditor: any

    export { CKEditor }
}
