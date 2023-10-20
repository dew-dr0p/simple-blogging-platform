import PostCard from '@/components/PostCard'
import usePostStore from '@/store/postStore';

const PostList = () => {
    const posts = usePostStore((state: any) => state.posts)

    return (
        <div className='grid md:grid-cols-2 gap-6'>
            {posts.map((post: any, index: number) => (
                <PostCard key={index} title={post.title} imageUrl={post.photo_url} imageAlt={post.photo_alt_text} postDate={new Date(post.created_at)} />
            ))}
        </div>
    );
}

export default PostList;