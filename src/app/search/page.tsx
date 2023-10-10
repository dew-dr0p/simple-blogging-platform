import PostList from '@/components/PostList'

const SearchPosts = () => {
    return (
        <div className='grid gap-5 col-span-8'>
            <h3 className='font-bold md:text-xl text-lg'>Menampilkan postingan yang sesuai dengan “html”</h3>
            <PostList />
        </div>
    );
}

export default SearchPosts;