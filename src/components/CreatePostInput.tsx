'use client'
import { useState } from "react";
import PostTextEditor from './PostTextEditor';

const CreatePostInput = ({ label, type, value, onChange }: { label: string, type: string, value: string | Array<string>, onChange(e: any): void }) => {
    const [input, setInput] = useState(value)

    const handleInput = (e: any) => {
        setInput(e.target.value)
        onChange(e)
    }

    // console.log(input)

    return (
        <div className="grid gap-3 h-fit">
            <label className="font-medium text-lg md:text-xl">{label}:</label>
            {type !== 'textarea' && <input type={type} value={input} onChange={handleInput} className="md:rounded-[0.625rem] rounded-md border border-grey py-3 px-4 md:px-6 focus-visible:outline-none" />}
            {/* {type === 'textarea' && 
                // <PostTextEditor initialContent={input as string} onChange={handleInput} />
            } */}
        </div>
    );
}

export default CreatePostInput;