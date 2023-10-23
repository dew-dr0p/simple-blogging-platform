import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react'

const NewPostEditorCK = ({initialContent, onChange}: {initialContent?: string, onChange: (content: string) => void}) => {
    const handleContentChange = (event: string, data: string) => {
        console.log('Before: ', initialContent)
        event === 'change:data' ? onChange(data) : ''
        console.log('After: ', initialContent)
    }

    return (
        <div>
            <CKEditor
                editor={ Editor }
                // config={ editorConfiguration }
                data={initialContent || ''}
                // onReady={ editor => {
                //     // You can store the "editor" and use when it is needed.
                //     console.log( 'Editor is ready to use!', editor );
                // } }
                onChange={(event, editor ) => {
                    const data = editor.getData()
                    handleContentChange(event.name, data)
                    // onChange(data)
                    console.log( { event, editor, data } );
                } }
            />
        </div>
    );
}

export default NewPostEditorCK;