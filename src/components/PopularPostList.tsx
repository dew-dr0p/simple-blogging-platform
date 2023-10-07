import SectionHeader from '@/components/SectionHeader'
import PopularPostCard from '@/components/PopularPostCard'

const PopularPostList = () => {
    return (
        <div className='grid gap-4 h-fit'>
            <SectionHeader Title={'Popular Posts'} />
            <PopularPostCard />
            <PopularPostCard />
            <PopularPostCard />
        </div>
    );
}

export default PopularPostList;