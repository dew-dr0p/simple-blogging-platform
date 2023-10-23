'use client'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';

const PostTextEditor = ({initialContent, onChange}: {initialContent: string, onChange: (content: string) => void}) => {
    const modules = {
        clipboard: {
            matchVisual: false
        }
    }

    const handleContentChange = (value: string) => {
        onChange(value)
    }

    return (
        // <ReactQuill value={content} onChange={handleContentChange} theme='snow'>
        //     <div className="md:rounded-[0.625rem] rounded-md border border-grey py-3 px-4 md:px-6 focus-visible:outline-none"></div>
        // </ReactQuill>
        <div>
            <ReactQuill value={initialContent} onChange={handleContentChange} theme='snow' modules={modules}></ReactQuill>
        </div>
    );
}

export default PostTextEditor;