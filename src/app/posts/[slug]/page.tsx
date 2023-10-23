import PostDetailPage from '@/components/PostDetailPage'
import axios from 'axios';

// export async function generateStaticParams() {
//     const posts = await axios.get('http://localhost:3000/api/blogPost').then((response) => {
//         // Transform the data into an array of posts
//         const transformedData = Object.keys(response.data).map((key) => ({
//             id: key,
//             ...response.data[key], // Merge the post details
//         }));
//         return transformedData
//     })
    
//     return posts.map((post) => ({
//         slug: post.title.replaceAll(' ', '_').replaceAll(':', '').toLowerCase(),
//         id: post.id
//     }))
// }

async function generateAllSlugs() {
    const posts = await axios.get('http://localhost:3000/api/blogPost').then((response) => {
        // Transform the data into an array of posts
        const transformedData = Object.keys(response.data).map((key) => ({
            id: key,
            ...response.data[key], // Merge the post details
        }));
        return transformedData
    })
    
    return posts.map((post) => ({
        slug: post.title.replaceAll(' ', '_').replaceAll(':', '').toLowerCase(),
        id: post.id
    }))
}

async function fetchId (slug: string) {
    const postsParams = await generateAllSlugs()
    // console.log(postsParams)
    const postParam = postsParams.find((post) => slug === post.slug)

    if (postParam) {
        console.log(postParam.id)
        return postParam.id
    } else {
        // Handle not-found case if necessary
        console.log('Invalid slug provided')
    }
}

const DetailPage = async ({ params }:{ params: { slug: string }}) => {
    console.log(params.slug)
    const postId = await fetchId(params.slug).then(res => res)
    console.log(postId)
    
    return (
        <PostDetailPage id={postId} />
    );
}

export default DetailPage;