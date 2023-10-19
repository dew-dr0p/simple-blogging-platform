import axios from "axios"

const baseURL = 'http://localhost:3000/api/blogPost'
// const appId = '652066992e0305cb50c526de'


const fetchPosts = async () => {
    try {
        const data = await axios.get(`${baseURL}`)
        .then(res => {
            console.log(res, res.data)
            return res.data
        })
        .catch(err => console.log(err))
        return data
    }
    catch(err) {
        console.log(err)
        throw Error
    }
}

const createPost = async (data: object) => {
    try {
        axios.post(`${baseURL}`, data)
        .then(res => console.log(res))
        .catch(err => console.log(err.response))
    } catch(err) {
        console.log(err)
    }
}

export {
    fetchPosts,
    createPost
}