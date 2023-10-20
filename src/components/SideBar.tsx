'use client'
import PopularPostList from '@/components/PopularPostList'
import CategoryList from '@/components/CategoryList'

const SideBar = () => {
    return (
        <div className="lg:grid gap-6 col-span-4 h-fit hidden">
            <PopularPostList />
            <CategoryList />
        </div>
    );
}

export default SideBar;