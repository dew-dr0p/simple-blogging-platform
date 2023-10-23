import PostDetailPage from '@/components/PostDetailPage'

const DetailPage = ({ params }:{ params: { slug: string }}) => {
    console.log(params.slug)
    return (
        <PostDetailPage />
    );
}

export default DetailPage;