'use client'
import PostList from '@/components/PostList'
import { useSearchParams } from 'next/navigation';

const SearchPosts = () => {
    const searchParams = useSearchParams()
    const searchQuery = searchParams.get('query')
    console.log(searchQuery)

    return (
        <div className='grid gap-5 col-span-8'>
            <h3 className='font-bold md:text-xl text-lg'>Displaying posts that contain “{searchQuery}”</h3>
            <PostList />
        </div>
    );
}

export default SearchPosts;