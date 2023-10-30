import PostList from '@/components/PostList'

const SearchPosts = () => {
    return (
        <div className='grid gap-5 col-span-8'>
            <h3 className='font-bold md:text-xl text-lg'>Displaying posts that are relevant to “html”</h3>
            <PostList start={0} end={3} />
        </div>
    );
}

export default SearchPosts;