'use client'
import { ChangeEvent, useState } from "react";
import dynamic from "next/dynamic";

// Dynamic import CKEditor, ensuring it's only used on the client-side
const NewPostEditorCK = dynamic(() => import('./NewPostEditorCK'), { ssr: false})
// const PostTextEditor = dynamic(() => import('./PostTextEditor'), { ssr: false})
// const DualModeEditor = dynamic(() => import('./DualModeEditor'), { ssr: false})

const CreatePostInput = ({ label, type, value, postValue, placeholder, onChange }: { label: string, type: string, value?: string | Array<string>, postValue?: string, placeholder?: string, onChange(e: any): void }) => {
    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e); // Call the parent's onChange function to update the state
    }

    const handleContentInput = (content: string) => {
        onChange(content); // Call the parent's onChange function to update the state
    }

    return (
        <div className="grid gap-3 h-fit">
            <label className="font-medium text-lg md:text-xl">{label}:</label>
            {type !== 'textarea' && <input type={type} value={value} placeholder={placeholder} onChange={handleInput} className="md:rounded-[0.625rem] rounded-md border border-grey py-3 px-4 md:px-6 focus-visible:outline-none" />}
            {type === 'textarea' && 
                // <PostTextEditor initialContent={value as string} onChange={handleContentInput} />
                // <DualModeEditor initialContent={value as string} onChange={handleContentInput} />
                <NewPostEditorCK initialContent={postValue as string} onChange={handleContentInput} />
            }
        </div>
    );
}

export default CreatePostInput;