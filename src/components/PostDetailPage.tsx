'use client'
import usePostStore from "@/store/postStore";
import date from 'date-and-time'
import DOMPurify from "dompurify";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import MoonLoader from 'react-spinners/MoonLoader'
import Toastify from 'toastify-js'
import 'toastify-js/src/toastify.css'

const PostDetailPage = ({ id }: { id: string }) => {
    const router = useRouter()

    const fetchPost = usePostStore((state: any) => state.fetchPost)
    const selectedPost = usePostStore((state: any) => state.selectedPost)
    const deletePost = usePostStore((state: any) => state.deletePost)

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        id ? fetchPost(id).then((res: any) => {console.log(res), setLoading(false)}) : console.error('Provide Valid Url')
        console.log(loading)
    }, [fetchPost, id, loading])

    const isEdited = selectedPost.updated_at > selectedPost.created_at
    const postDate = isEdited ? selectedPost.updated_at : selectedPost.created_at

    const handleDeleteClick = () => {
        const shouldDelete = confirm("You're about to delete a post")
        shouldDelete ? deletePost(selectedPost.id).then((res: any) => {
            console.log(res)
            if (!res.data.hasOwnProperty('message')) {
                Toastify({
                    text: 'Delete unsuccessful',
                    position: 'center',
                    gravity: 'bottom',
                    offset: {
                        x: 0,
                        y: 50
                    },
                    style: {
                        background: 'red'
                    }
                }).showToast()
            } else {
                Toastify({
                    text: res.data.message,
                    position: 'center',
                    gravity: 'bottom',
                    offset: {
                        x: 0,
                        y: 50
                    },
                    style: {
                        background: 'green'
                    }
                }).showToast()
                router.push('/')
            }
        }) : ''
    }

    const handleEditClick = () => {
        router.push(`create?id=${selectedPost.id}`)
    }

    return (
        <div className='grid gap-5 col-span-8'>
            <div className="bg-primary text-white grid items-center p-4 md:p-3 py-2 md:py-3 text-sm md:text-base rounded-md md:rounded-[0.625rem] h-fit">
                <p>Home &gt; Posts &gt; {selectedPost.title}</p>
            </div>
            <div className="grid gap-2.5 h-fit">
                <h2 className="text-2xl md:text-3xl font-bold w-full flex gap-4 h-fit">{loading || !selectedPost.title ? <Skeleton count={2} containerClassName="w-full" baseColor="#616161" className="opacity-50" /> : selectedPost.title} 
                    <span className="float-right flex gap-2">
                        <div onClick={handleEditClick} className="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
                        </div>
                        <div onClick={handleDeleteClick} className="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                        </div>
                    </span></h2>
                <div className="flex flex-col md:flex-row gap-1 md:gap-5 text-grey">
                    {loading || !postDate ? <Skeleton containerClassName="w-1/3" baseColor="#616161" className="opacity-50" /> : <p><span className="font-bold">By</span> Admin</p>}
                    {loading || !postDate ? <Skeleton containerClassName="w-1/3" baseColor="#616161" className="opacity-50" /> : <p>{date.format(new Date(postDate), 'DD MMMM YYYY')} {isEdited ? '(edited)' : ''}</p>}
                </div>
            </div>
            <div className="relative w-full min-h-[50vw] lg:min-h-[30vw] grid my-5">
                <MoonLoader loading={loading || !selectedPost.photo_url} className="place-self-center" />
                {(!loading && selectedPost.photo_url) && <Image
                    src={selectedPost.photo_url}
                    alt={selectedPost.photo_alt_text}
                    fill={true}
                    objectFit="contain"
                ></Image>}
            </div>
            {(!loading && selectedPost.content) ? <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(selectedPost.content)}} className="grid gap-4"></div> : <Skeleton count={15} containerClassName="grid gap-2 w-full" baseColor="#616161" className="opacity-50 max-w-full" height={20}  />}
        </div>
    );
}

export default PostDetailPage;