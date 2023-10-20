import PostCard from '@/components/PostCard'
import usePostStore from '@/store/postStore';

const PostList = () => {
    const posts = usePostStore((state: any) => state.posts)
    const currentPage = usePostStore((state: any) => state.currentPage)
    const setCurrentPage = usePostStore((state: any) => state.setCurrentPage())

    const postsPerPage = 10; // Number of posts per page
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;

    const displayedPosts = posts.slice(startIndex, endIndex);

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
        <div className='grid md:grid-cols-2 gap-6'>
            {posts && displayedPosts.map((post: any, index: number) => (
                <PostCard key={index} title={post.title} imageUrl={post.photo_url} imageAlt={post.photo_alt_text} postDate={new Date(post.created_at)} postContent={post.content} />
            ))}
        </div>
    );
}

export default PostList;