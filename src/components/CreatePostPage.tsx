'use client'
import CreatePostInput from '@/components/CreatePostInput'
import { createPost, editPost } from '@/utils/utils';
import { useSearchParams } from 'next/navigation';
import { FormEvent, useEffect, useState } from 'react';
import usePostStore from '@/store/postStore';
import path from 'path';


const CreatePostPage = () => {
    const searchParams = useSearchParams()
    const postId = searchParams.get('id')
    console.log(postId, path)

    const fetchPost = usePostStore((state: any) => state.fetchPost)
    const selectedPost = usePostStore((state: any) => state.selectedPost)

    const [title, setTitle] = useState('')
    const [image_url, setImage_Url] = useState('')
    const [image_alt, setImage_Alt] = useState('')
    const [content, setContent] = useState('')
    const [categories, setCategory] = useState([])

    const handleSubmit = (e: FormEvent) => {
        e?.preventDefault()
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
                }).then(() => {
                    setTitle('')
                    setImage_Alt('')
                    setImage_Url('')
                    setContent('')
                    setCategory([])
                }).catch(err => console.log(err))
            } else {
                createPost({
                 title: title,
                 photo_url: image_url,
                 alt_text: image_alt,
                 content: content,
                 categories: categories
                }).then(() => {
                    setTitle('')
                    setImage_Alt('')
                    setImage_Url('')
                    setContent('')
                    setCategory([])
                }).catch(err => console.log(err))
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
        setCategory((e.target.value).split(', '))
    }

    useEffect(() => {
        postId ? fetchPost(postId) : ''
    }, [fetchPost, postId])

    useEffect(() => {
        console.log('selected post effect ran')
        console.log(selectedPost)
        setTitle(selectedPost.title)
        setImage_Alt(selectedPost.photo_alt_text)
        setImage_Url(selectedPost.photo_url)
        setContent(selectedPost.content)
        setCategory(selectedPost.categories)
    }, [selectedPost])

    return (
        <div className='grid gap-5 col-span-8 h-fit'>
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