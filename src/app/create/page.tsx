import CreatePostInput from '@/components/CreatePostInput'

const createPost = () => {
    return (
        <div className='grid gap-5 col-span-8 h-fit'>
            <h2 className="text-2xl md:text-3xl font-bold">Mengenal Apa Itu HTML ?</h2>
            <form className="grid gap-6">
                <CreatePostInput label="Title" type="text" />
                <CreatePostInput label="Post" type="textarea" />
                <button type='submit' className='bg-primary text-white justify-self-center justify-center py-3 px-6 mt-4 shadow-small text-lg md:text-xl font-bold rounded-md md:rounded-[0.625rem]'>Submit</button>
            </form>
        </div>
    );
}

export default createPost;