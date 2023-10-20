'use client'
import CreatePostInput from '@/components/CreatePostInput'
import { createPost } from '@/utils/utils';
import { FormEvent, useState } from 'react';

const CreatePostPage = () => {
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
        } catch(err) {
            console.log(err)
        }
    }

    function handleTitle(e: any) {
        setTitle(e.target.value)
        // console.log(title)
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

    return (
        <div className='grid gap-5 col-span-8 h-fit'>
            <h2 className="text-2xl md:text-3xl font-bold">Mengenal Apa Itu HTML ?</h2>
            <form onSubmit={handleSubmit} className="grid gap-6">
                <CreatePostInput label="Title" type="text" value={title} onChange={handleTitle} />
                <div className='grid grid-flow-col gap-5'>
                    <CreatePostInput label='Image (url)' type='text' value={image_url} onChange={handleImageUrl} />
                    <CreatePostInput label='Image (alt text)' type='text' value={image_alt} onChange={handleImageAlt} />
                </div>
                <CreatePostInput label="Post" type="textarea" value={content} onChange={handleContent} />
                <CreatePostInput label='Category' type='text' value={categories} onChange={handleCategory} />
                <button type='submit' className='bg-primary text-white justify-self-center justify-center py-3 px-6 mt-4 shadow-small text-lg md:text-xl font-bold rounded-md md:rounded-[0.625rem]'>Submit</button>
            </form>
        </div>
    );
}

export default CreatePostPage;