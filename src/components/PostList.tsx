import PostCard from '@/components/PostCard'
import usePostStore from '@/store/postStore';

const PostList = ({
    start,
    end
}:{
    start: number
    end: number
}) => {
    const posts = usePostStore((state: any) => state.posts)

    const displayedPosts = posts.slice(start, end);

    return (
        <div className='grid md:grid-cols-2 gap-6'>
            {posts && displayedPosts.map((post: any, index: number) => (
                <PostCard key={index} title={post.title} imageUrl={post.photo_url} imageAlt={post.photo_alt_text} postDate={new Date(post.created_at)} postContent={post.content} categories={post.categories} />
            ))}
        </div>
    );
}

export default PostList;