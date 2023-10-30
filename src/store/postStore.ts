// PostStore.ts
// This is the zustand store for the entire application, it handles storing of posts and also has actions for fetching, deleting, creating and editing post.
import axios from "axios";
import { create } from "zustand";

const usePostStore = create((set) => ({
    posts: [],
    selectedPost: {},
    currentPage: 1, // Initial Page is 1
    setCurrentPage: (page: number) => set({ currentPage: page}),
    setSelectedPost: (post: object) => set({ selectedPost: post}),
    fetchPosts: async () => {
        try {
            set({ selectedPost: {} })
            // Use Axios to fetch data from your Firebase API
            const response = await axios.get('/api/blogPost').then(res => res).catch(err => err.response)
            // console.log(response)

            // Transform the data into an array of posts
            const transformedData = Object.keys(response.data).map((key) => ({
                id: key,
                ...response.data[key], // Merge the post details
            }));
            // console.log(transformedData)

            set({ posts: transformedData.reverse() });
            return response
        } catch (error) {
            console.error('Error fetching posts:', error)
        }
    },
    fetchPost: async (postId: string) => {
        try {
            set({ selectedPost: {} })
            // Use Axios to fetch post from Firebase
            const response = await axios.get(`/api/blogPost?id=${postId}`).then(res => res).catch(err => err.response)
            // console.log(response)

            set({ selectedPost: response.data })
            return response
        } catch (error) {
            console.error('Error fetching post: ', error)
        }
    },
    createPost: async (postData: object) => {
        try {
            // Use Axios to make a post request to Firebase
            const response = await axios.post('/api/blogPost', postData).then(res => res).catch(err => err.response)
            // console.log(response)

            return response
        } catch (error) {
            console.error('Error creating new post: ', error)
        }
    },
    editPost: async (postData: object) => {
        try {
            // Use Axios to make a put request to Firebase
            const response = await axios.put('/api/blogPost', postData).then(res => res).catch(err => err.response)
            // console.log(response)

            return response
        } catch (error) {
            console.error('Error editing post: ', error)
        }
    },
    deletePost: async (postId: string) => {
        try {
            // Use Axios to delete post from Firebase
            const response = await axios.delete(`/api/blogPost?id=${postId}`).then(res => res).catch(err => err.response)
            // console.log(response)

            return response
        } catch (error) {
            console.error('Error deleting post: ', error)
        }
    }
}))

export default usePostStore