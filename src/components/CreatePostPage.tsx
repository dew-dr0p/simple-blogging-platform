'use client'
import CreatePostInput from '@/components/CreatePostInput'
// import { createPost, editPost } from '@/utils/utils';
import { useRouter, useSearchParams } from 'next/navigation';
import { FormEvent, useEffect, useState } from 'react';
import usePostStore from '@/store/postStore';
import Toastify from 'toastify-js'
import 'toastify-js/src/toastify.css'
import BeatLoader from 'react-spinners/BeatLoader'

const CreatePostPage = () => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const postId = searchParams.get('id')

    const fetchPost = usePostStore((state: any) => state.fetchPost)
    const selectedPost = usePostStore((state: any) => state.selectedPost)
    const createPost = usePostStore((state: any) => state.createPost)
    const editPost = usePostStore((state: any) => state.editPost)

    // Generate slug from title
    const slug = selectedPost.title?.replaceAll(' ', '_').replaceAll(':', '').toLowerCase()

    const [title, setTitle] = useState('')
    const [image_url, setImage_Url] = useState('')
    const [image_alt, setImage_Alt] = useState('')
    const [content, setContent] = useState('')
    const [categories, setCategory] = useState([])

    const [loading, setLoading] = useState(false)

    const handleSubmit = (e: FormEvent) => {
        e?.preventDefault()
        setLoading(true)
        console.log(title)
        console.log(image_url)
        console.log(image_alt)
        console.log(content)
        console.log(categories)
        try {
            if (postId) {
                editPost({
                    id: postId,
                 title: title,
                 photo_url: image_url,
                 alt_text: image_alt,
                 content: content,
                 categories: categories,
                 created_at: selectedPost.created_at
                }).then((res: any) => {
                    console.log(res)
                    setLoading(false)
                    if (res.data.hasOwnProperty('error')) {
                        Toastify({
                            text: res.data.error,
                            position: 'center',
                            gravity: 'bottom',
                            offset: {
                                y: 50
                            },
                            style: {
                                background: 'red'
                            }
                        }).showToast()
                    } else {
                        setTitle('')
                        setImage_Alt('')
                        setImage_Url('')
                        setContent('')
                        setCategory([])
                        Toastify({
                            text: res.data.message,
                            position: 'center',
                            gravity: 'bottom',
                            offset: {
                                y: 50
                            },
                            style: {
                                background: 'green'
                            }
                        }).showToast()
                        router.push(`${slug}`)
                    }
                })
            } else {
                createPost({
                 title: title,
                 photo_url: image_url,
                 alt_text: image_alt,
                 content: content,
                 categories: categories
                }).then((res: any) => {
                    console.log(res)
                    setLoading(false)
                    if (res.data.hasOwnProperty('error')) {
                        Toastify({
                            text: res.data.error,
                            position: 'center',
                            gravity: 'bottom',
                            offset: {
                                y: 50
                            },
                            style: {
                                background: 'red'
                            }
                        }).showToast()
                    } else {
                        setTitle('')
                        setImage_Alt('')
                        setImage_Url('')
                        setContent('')
                        setCategory([])
                        Toastify({
                            text: res.data.message,
                            position: 'center',
                            gravity: 'bottom',
                            offset: {
                                y: 50
                            },
                            style: {
                                background: 'green'
                            }
                        }).showToast()
                        router.push('/')
                    }
                })
            }
        } catch(err) {
            console.log(err)
        }
    }

    function handleTitle(e: any) {
        setTitle(e.target.value)
    }
    function handleImageAlt(e: any) {
        setImage_Alt(e.target.value)
    }
    function handleImageUrl(e: any) {
        setImage_Url(e.target.value)
    }
    function handleContent(value: string) {
        setContent(value)
    }
    function handleCategory(e: any) {
        setCategory((e.target.value).split(','))
    }

    useEffect(() => {
        postId ? fetchPost(postId).then((res: any) => console.log(res)) : ''
    }, [fetchPost, postId])

    useEffect(() => {
        console.log('selected post effect ran')
        console.log(selectedPost, postId)
        if (postId) {
            setTitle(selectedPost.title)
            setImage_Alt(selectedPost.photo_alt_text)
            setImage_Url(selectedPost.photo_url)
            setContent(selectedPost.content)
            setCategory(selectedPost.categories)
        }
    }, [selectedPost, postId])

    return (
        <div className='grid gap-5 relative col-span-8 h-fit'>
            {loading && <div className="absolute z-50 w-full h-full flex items-center justify-center bg-white bg-opacity-75">
                <BeatLoader color='#02A28F' />
            </div>}
            <h2 className="text-2xl md:text-3xl font-bold">Create your post today</h2>
            <form onSubmit={handleSubmit} className="grid gap-6">
                <CreatePostInput label="Title" type="text" value={title} placeholder='Enter title of post' onChange={handleTitle} />
                <div className='grid grid-flow-col gap-5'>
                    <CreatePostInput label='Image (url)' type='text' value={image_url} placeholder='Enter link to Image resource' onChange={handleImageUrl} />
                    <CreatePostInput label='Image (alt text)' type='text' value={image_alt} placeholder='Enter Alternate text for Image' onChange={handleImageAlt} />
                </div>
                <CreatePostInput label="Post" type="textarea" value={content} onChange={handleContent} />
                <CreatePostInput label='Category' type='text' value={categories} placeholder='Seperate values with a comma ", "' onChange={handleCategory} />
                <button type='submit' className='bg-primary text-white justify-self-center justify-center py-3 px-6 mt-4 shadow-small text-lg md:text-xl font-bold rounded-md md:rounded-[0.625rem]'>Submit</button>
            </form>
        </div>
    );
}

export default CreatePostPage;