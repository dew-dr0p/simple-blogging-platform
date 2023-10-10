const CreatePostInput = ({ label, type }: { label: string, type: string }) => {
    return (
        <div className="grid gap-3 h-fit">
            <label className="font-medium text-lg md:text-xl">{label}:</label>
            {type !== 'textarea' && <input type={type} className="md:rounded-[0.625rem] rounded-md border border-grey py-3 px-4 md:px-6 focus-visible:outline-none" />}
            {type === 'textarea' && 
                <textarea rows={20} className="md:rounded-[0.625rem] rounded-md border border-grey py-3 px-4 md:px-6 focus-visible:outline-none"></textarea>
            }
        </div>
    );
}

export default CreatePostInput;