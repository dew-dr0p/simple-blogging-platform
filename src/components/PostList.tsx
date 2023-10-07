'use client'
import PostCard from '@/components/PostCard'
import { fetchPosts } from '@/utils/utils';
import { useEffect } from 'react';

const PostList = () => {

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <div className='grid md:grid-cols-2 gap-6'>
            <PostCard />
            <PostCard />
            <PostCard />
        </div>
    );
}

export default PostList;