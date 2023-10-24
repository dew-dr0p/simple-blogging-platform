'use client'
import PopularPostList from '@/components/PopularPostList'
import CategoryList from '@/components/CategoryList'
import { useEffect } from 'react'
import usePostStore from '@/store/postStore'

const SideBar = () => {
    const posts = usePostStore((state: any) => state.posts)
    const fetchPosts = usePostStore((state: any) => state.fetchPosts)

    useEffect(() => {
        console.log(posts.length)
        // Fetch posts only if there are no posts
        if (posts.length === 0) {
            fetchPosts()
        }
    }, [fetchPosts, posts])
    
        // // Fetch posts only if there are no posts
        // if (posts.length === 0) {
        //     fetchPosts()
        // }

    return (
        <div className="lg:grid gap-6 col-span-4 h-fit hidden">
            <PopularPostList />
            <CategoryList />
        </div>
    );
}

export default SideBar;