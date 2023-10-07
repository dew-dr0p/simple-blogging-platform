import HomePage from '@/components/HomePage'
import SideBar from '@/components/SideBar'

const BlogApp = () => {
    return (
        <main className="container-blog grid lg:grid-cols-12 gap-4 xl:gap-6 py-14">
            <HomePage />
            <SideBar />
        </main>
    );
}

export default BlogApp;