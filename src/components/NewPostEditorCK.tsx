import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react'

const NewPostEditorCK = ({initialContent, onChange}: {initialContent?: string, onChange: (content: string) => void}) => {
    if (typeof window === 'undefined') {
        return null
    }

    const handleContentChange = (data: string) => {
        onChange(data)
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
                    handleContentChange(data)
                    // onChange(data)
                    console.log( { event, editor, data } );
                } }
            />
        </div>
    );
}

export default NewPostEditorCK;