import BannerImage from '@/components/BannerImage'
import PostList from '@/components/PostList'

const BlogApp = () => {
    return (
        <div className='grid gap-6 col-span-8'>
            <BannerImage />
            <div className='bg-primary text-white grid grid-flow-col justify-between items-center py-3 px-4 md:px-6 rounded-md md:rounded-[0.625rem] shadow-small'>
                <h3 className='font-bold text-sm md:text-xl'>Recent Posts</h3>
                <p className='md:text-base text-xs font-medium underline'>See More</p>
            </div>
            <PostList />
        </div>
    );
}

export default BlogApp;