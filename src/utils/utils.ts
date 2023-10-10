import axios from "axios"

const baseURL = 'https://dummyapi.io/data/v1'
const appId = '652066992e0305cb50c526de'


const fetchPosts = async () => {
    try {
        axios.get(`${baseURL}/user`, {
            headers: {
                'app-id': appId
            }
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    catch(err) {
        console.log(err)
    }
}

export {
    fetchPosts
}