// 'use client'
import PostCard from '@/components/PostCard'
import usePostStore from '@/store/postStore';
import { useEffect } from 'react';

const PostList = () => {
    return (
        <div className='grid md:grid-cols-2 gap-6'>
            <PostCard />
            <PostCard />
            <PostCard />
        </div>
    );
}

export default PostList;