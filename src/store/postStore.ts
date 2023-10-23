import axios from "axios";
import { create } from "zustand";

const usePostStore = create((set) => ({
    posts: [],
    selectedPost: {},
    currentPage: 1, // Initial Page is 1
    setCurrentPage: (page: number) => set({ currentPage: page}),
    fetchPosts: async () => {
        try {
            // Use Axios to fetch data from your Firebase API
            const response = await axios.get('/api/blogPost');
            // console.log(response.data, response)

            // Transform the data into an array of posts
            const transformedData = Object.keys(response.data).map((key) => ({
                id: key,
                ...response.data[key], // Merge the post details
            }));
            // console.log(transformedData)

            set({ posts: transformedData });
        } catch (error) {
            console.error('Error fetching posts:', error)
        }
    },
    fetchPost: async (postId: string) => {
        try {
            // Use Axios to fetch post from Firebase
            const response = await axios.get(`/api/blogPost?id=${postId}`)
            console.log(response.data)

            set({ selectedPost: response.data })
        } catch (error) {
            console.error('Error fetching post: ', error)
        }
    },
    // addPosts: (data: any) => set((state: any) => ({ posts: [data, ...state.posts] })),
    // deletePost: (postId: any) => set((state: any) => ({ posts: state.posts.filter((e: any) => postId !== e.id )}))
    deletePost: async (postId: string) => {
        try {
            // Use Axios to delete post from Firebase
            const response = await axios.delete(`/api/blogPost?id=${postId}`)
            console.log(response)
        } catch (error) {
            console.error('Error deleting post: ', error)
        }
    }
}))

export default usePostStore