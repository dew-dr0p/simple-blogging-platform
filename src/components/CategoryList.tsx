import SectionHeader from '@/components/SectionHeader'

const CategoryLists = () => {
    return (
        <div className="grid gap-4 h-fit">
            <SectionHeader Title={'Category'} />
            <div className='grid gap-1'>
                <div className='font-semibold flex justify-between cursor-pointer'>
                    <p>&gt; Nature</p>
                    <p>(1)</p>
                </div>
                <div className='font-semibold flex justify-between cursor-pointer'>
                    <p>&gt; Nature</p>
                    <p>(1)</p>
                </div>
            </div>
        </div>
    );
}

export default CategoryLists;