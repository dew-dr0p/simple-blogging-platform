import SectionHeader from '@/components/SectionHeader'
import PopularPostCard from '@/components/PopularPostCard'
import usePostStore from '@/store/postStore';

const PopularPostList = () => {
    const posts = usePostStore((state: any) => state.posts)
    const displayedPosts = posts.slice(0, 3)

    return (
        <div className='grid gap-4 h-fit'>
            <SectionHeader Title={'Popular Posts'} />
            {displayedPosts.map((post: any, index: number) => (
                <PopularPostCard key={index} title={post.title} imageUrl={post.photo_url} imageAlt={post.photo_alt_text} postDate={new Date(post.created_at)} />
            ))}

        </div>
    );
}

export default PopularPostList;