'use client'
import BannerImage from '@/components/BannerImage'
import PostList from '@/components/PostList'
import usePostStore from '@/store/postStore';
import { useEffect } from 'react';

const BlogApp = () => {
    const fetchPosts = usePostStore((state: any) => state.fetchPosts)
    const posts = usePostStore((state: any) => state.posts)
    const bannerPost = posts[1]
    
    useEffect(() => {
        // Fetch posts when the component mounts
        fetchPosts()
        console.log('effect ran')
    }, [])

    posts ? console.log(posts) : ''

    return (
        <div className='grid gap-6 col-span-8'>
            {posts && <BannerImage imageUrl={bannerPost?.photo_url} imageAlt={bannerPost?.photo_alt_text} title={bannerPost?.title} />}
            <div className='bg-primary text-white grid grid-flow-col justify-between items-center py-3 px-4 md:px-6 rounded-md md:rounded-[0.625rem] shadow-small'>
                <h3 className='font-bold text-sm md:text-xl'>Recent Posts</h3>
                <p className='md:text-base text-xs font-medium underline'>See More</p>
            </div>
            {posts && <PostList />}
            {/* {JSON.stringify(posts)} */}
        </div>
    );
}

export default BlogApp;