import SectionHeader from '@/components/SectionHeader'
import usePostStore from '@/store/postStore';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const CategoryLists = () => {
    const selectedPost = usePostStore((state: any) => state.selectedPost)
    console.log(selectedPost)

    return (
        <div className="grid gap-4 h-fit">
            <SectionHeader Title={'Category'} />
            <div className='grid gap-1'>
                {selectedPost.categories == null ? <Skeleton count={5} baseColor="#616161" className="opacity-50" /> : selectedPost.categories?.map((category: string, index: number) => (<div key={index} className='font-semibold flex justify-between'>
                        <p>&gt; {category}</p>
                        <p>({index + 1})</p>
                    </div>))}
            </div>
        </div>
    );
}

export default CategoryLists;