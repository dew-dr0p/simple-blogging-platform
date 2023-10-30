// app/posts/[slug]/page.tsx
// This is a dynamic route page, it works for any slug passed into the route of the application. It is used for the blog posts since the route for each post is expected to be unique to such post
import { headers, cookies } from 'next/headers';
import PostDetailPage from '@/components/PostDetailPage'
import axios from 'axios';
import { notFound } from 'next/navigation';

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

// This function generates all the slugs as soon as the page loads, it works like the generateStaticParams function, except that it returns the generated slugs and can be accessed later.
async function generateAllSlugs() {
    // Tip: If you don't have access to the NextRequest, you can get the request host from next/headers
    const h = { cookie: cookies().toString() };

    // Check if you are running in a development environment
    const isDevelopment = process.env.NODE_ENV === 'development';

    // Define the base URL for your API
    let baseURL = '';

    if (isDevelopment) {
        baseURL = 'http://localhost:3001'; // Default to a local development server URL
    } else {
        baseURL = `https://${headers().get('Host')}`; // Default to your production server URL
    }
    const posts = await axios.get(`${baseURL}/api/blogPost`, { headers: h }).then((response) => {
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

// This function is used to fetch the id for a particular blog page if the page was loaded directly without being passed from the home page.
// Basically it works by getting all the slugs and id from the generateAllSlugs function and then compares the slug of the current page to get the particular id associated with that slug and uses the id to fetch the past from the database.
// This approach is taking because the slugs are not stored alongside the pages in the database so they have to be generated in real time.
async function fetchId (slug: string) {
    const postsParams = await generateAllSlugs()
    const postParam = postsParams.find((post) => slug === post.slug)

    if (postParam) {
        return postParam.id
    } else {
        // Handle not-found case if necessary
        console.log('Invalid slug provided')
        throw new Error("Enter valid url");
    }
}

const DetailPage = async ({ params }:{ params: { slug: string }}) => {
    const postId = await fetchId(params.slug).then(res => res).catch(err => {console.log(err), notFound()})
    
    return (
        <PostDetailPage id={postId} />
    );
}

export default DetailPage;