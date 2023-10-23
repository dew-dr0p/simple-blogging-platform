'use client'
import { ChangeEvent } from "react";
import DualModeEditor from "./DualModeEditor";
import PostTextEditor from "./PostTextEditor";

const CreatePostInput = ({ label, type, value, placeholder, onChange }: { label: string, type: string, value: string | Array<string>, placeholder?: string, onChange(e: any): void }) => {
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
            {/* {type === 'textarea' && 
                <PostTextEditor initialContent={value as string} onChange={handleContentInput} />
                // <DualModeEditor initialContent={value as string} onChange={handleContentInput} />
            } */}
        </div>
    );
}

export default CreatePostInput;