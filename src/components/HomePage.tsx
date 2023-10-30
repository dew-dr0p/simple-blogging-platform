// This is the HomePage component
// It handles the display of posts on the main page, and at the same time also handles the UI for pagination
'use client'
import BannerImage from '@/components/BannerImage'
import PostList from '@/components/PostList'
import usePostStore from '@/store/postStore';
import { useEffect, useState } from 'react';
import FadeLoader from 'react-spinners/FadeLoader'

const BlogApp = () => {
    const fetchPosts = usePostStore((state: any) => state.fetchPosts)
    const posts = usePostStore((state: any) => state.posts)
    const currentPage = usePostStore((state: any) => state.currentPage)
    const setCurrentPage = usePostStore((state: any) => state.setCurrentPage)
    const setSelectedPost = usePostStore((state: any) => state.setSelectedPost)
    
    const randomPost = Math.ceil(Math.random() * 10)
    console.log(randomPost)
    const bannerPost = posts[randomPost]
    useEffect(() => {
        setSelectedPost(bannerPost)
    }, [bannerPost, setSelectedPost])

    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        // Fetch posts when the component mounts
        fetchPosts().then((res: any) => {
            console.log(res)
            setLoading(false)
        })
    }, [fetchPosts])

    const postsPerPage = 10; // Number of posts per page
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;

    // Handle pagination actions
    const handlePreviousPage = () => {
        if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (endIndex < posts.length) {
        setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className='grid gap-6 col-span-8'>
            <BannerImage loading={loading} imageUrl={bannerPost?.photo_url} imageAlt={bannerPost?.photo_alt_text} title={bannerPost?.title} categories={bannerPost?.categories} />
            <div className='bg-primary text-white grid grid-flow-col justify-between items-center py-3 px-4 md:px-6 rounded-md md:rounded-[0.625rem] shadow-small'>
                {currentPage <= 1 && <h3 className='font-bold text-sm md:text-xl'>Recent Posts</h3>}
                {currentPage > 1 && <p onClick={handlePreviousPage} className='md:text-base text-xs font-medium underline cursor-pointer'>Prev Page</p>}
                {endIndex < posts.length && <p onClick={handleNextPage} className='md:text-base text-xs font-medium underline cursor-pointer'>Next Page</p>}
            </div>
            <FadeLoader loading={loading} color='#616161' className='justify-self-center my-10' />
            {!loading && <PostList start={startIndex} end={endIndex} />}
        </div>
    );
}

export default BlogApp;