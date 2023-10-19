'use client'
import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';

const PostTextEditor = ({initialContent, onChange}: {initialContent: string, onChange: (content: string) => void}) => {
    const [content, setContent] = useState(initialContent)
    // Update local state when initialContent changes
    useEffect(() => {
        setContent(initialContent);
    }, [initialContent]);
    const handleContentChange = (value: string) => {
        setContent(value)
        onChange(value)
    }

    return (
        <ReactQuill value={content} onChange={handleContentChange} theme='snow'>
            <div className="md:rounded-[0.625rem] rounded-md border border-grey py-3 px-4 md:px-6 focus-visible:outline-none" style={{height: 'auto'}}></div>
        </ReactQuill>
    );
}

export default PostTextEditor;