// CategoryList Component
// This is the Category List component it displays the category of an highlighted post in the page, on the homepage it shows the category of the banner post, while on the details page it shows the category of the selected post. 
import SectionHeader from '@/components/SectionHeader'
import usePostStore from '@/store/postStore';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const CategoryLists = () => {
    const selectedPost = usePostStore((state: any) => state.selectedPost)

    return (
        <div className="grid gap-4 h-fit">
            <SectionHeader Title={'Category'} />
            <div className='grid gap-1'>
                {selectedPost?.categories == null ? <Skeleton count={5} baseColor="#616161" className="opacity-50" /> : selectedPost.categories?.map((category: string, index: number) => (<div key={index} className='font-semibold flex justify-between'>
                        <p>&gt; {category}</p>
                        <p>({index + 1})</p>
                    </div>))}
            </div>
        </div>
    );
}

export default CategoryLists;