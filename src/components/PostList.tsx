import PostCard from '@/components/PostCard'
import usePostStore from '@/store/postStore';
import { useEffect, useRef } from 'react';

const PostList = ({
    start,
    end
}:{
    start?: number
    end?: number
}) => {
    const posts = usePostStore((state: any) => state.posts)
    const searchResults = usePostStore((state: any) => state.searchResults)

    // let displayedPosts = useRef<any>()

    // start && end ? displayedPosts = posts?.slice(start, end) : searchResults ? displayedPosts = searchResults : console.log('Provide valid prop')

    // console.log(start, end, displayedPosts.current)
    
    // useEffect(() => {
        //         // (start && end) ? () => {displayedPosts.current = posts?.slice(start, end), console.log('ran')} : searchResults ? () => displayedPosts.current = searchResults : console.log('Provide valid prop')
        //         if (start !== undefined && end !== undefined) {displayedPosts.current = posts?.splice(start, end), console.log('ran')} else if (searchResults !== undefined) displayedPosts.current = searchResults
        //         if (start !== undefined) console.log('I ran')
        //         console.log(start, end, displayedPosts.current, posts?.splice(start, end))
        //     }, [posts, start, end, searchResults])
        
    const displayedPosts = (start !== undefined && end !== undefined) ? posts.slice(start, end) : searchResults !== undefined ? searchResults.slice(0, 10) : console.log('Provide valid prop')
    console.log(start, end, displayedPosts, searchResults)
        
    return (
        <div className='grid md:grid-cols-2 gap-6'>
            {displayedPosts?.map((post: any, index: number) => (
                <PostCard key={index} title={post.title} imageUrl={post.photo_url} imageAlt={post.photo_alt_text} postDate={new Date((post.created_at < post.updated_at) ? post.updated_at : post.created_at)} isEdited={post.created_at < post.updated_at} postContent={post.content} categories={post.categories} />
            ))}
        </div>
    );
}

export default PostList;