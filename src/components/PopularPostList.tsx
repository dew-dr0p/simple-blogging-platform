import SectionHeader from '@/components/SectionHeader'
import PopularPostCard from '@/components/PopularPostCard'
import usePostStore from '@/store/postStore';
import FadeLoader from 'react-spinners/FadeLoader'
import { useEffect, useRef } from 'react';

const PopularPostList = () => {
    const posts = usePostStore((state: any) => state.posts)
    let displayedPosts = useRef<any>()
    useEffect(() => {
        // Display random Posts
        const start = Math.ceil(Math.random() * 17)
        displayedPosts.current = posts.slice(start, start + 3)
        console.log(start, displayedPosts.current)
    }, [posts])

    return (
        <div className='grid gap-4 h-fit'>
            <SectionHeader Title={'Popular Posts'} />
            <FadeLoader loading={displayedPosts.current == null || displayedPosts.current?.length == 0} color='#616161' className='justify-self-center my-10' />
            {displayedPosts.current?.map((post: any, index: number) => (
                <PopularPostCard key={index} title={post.title} imageUrl={post.photo_url} imageAlt={post.photo_alt_text} postDate={new Date((post.created_at < post.updated_at) ? post.updated_at : post.created_at)} isEdited={post.created_at < post.updated_at} />
            ))}

        </div>
    );
}

export default PopularPostList;