// SideBar component
// This is the component that contains the popular post list in the sidebar and category listing.
'use client'
import PopularPostList from '@/components/PopularPostList'
import CategoryList from '@/components/CategoryList'
import { useEffect } from 'react'
import usePostStore from '@/store/postStore'
import { useRouter } from 'next/navigation'

const SideBar = () => {
    const posts = usePostStore((state: any) => state.posts)
    const fetchPosts = usePostStore((state: any) => state.fetchPosts)
    const router = useRouter()

    useEffect(() => {
        console.log(posts.length)
        // Fetch posts only if there are no posts
        if (posts.length === 0) {
            fetchPosts().then((res: any) => console.log(res))
        }
    }, [fetchPosts, posts])

    return (
        <div className="lg:grid gap-6 col-span-4 h-fit hidden">
            <PopularPostList />
            <CategoryList />
        </div>
    );
}

export default SideBar;