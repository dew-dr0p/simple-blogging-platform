import Image from "next/image";
import date from 'date-and-time'
import Link from "next/link";
import { useEffect, useRef } from "react";

const PostCard = ({
        isEdited,
        title,
        imageUrl,
        imageAlt,
        categories,
        postDate,
        postContent,
    }:{
        isEdited: boolean,
        title: string,
        imageUrl: string,
        imageAlt: string,
        categories: Array<string>,
        postDate: Date,
        postContent: string
    }) => {
        let snippet = useRef('')

        useEffect(() => {
            // Convert content HTML to plain text
            const temporaryDiv = document.createElement("div");
            temporaryDiv.innerHTML = postContent;
            const plainText = temporaryDiv.innerText;
            snippet.current = plainText.slice(0, 100).concat('...')
        }, [postContent])

        // Generate slug from title
        const slug = title.replaceAll(' ', '_').replaceAll(':', '').toLowerCase()
        // console.log(slug)

    return (
        <Link href={`/posts/${slug}`} className="rounded-[0.625rem] bg-white shadow-big">
            <div className="bg-[#D9D9D9] rounded-[0.625rem] relative h-48">
                {/* <img src={imageUrl} alt={imageAlt} /> */}
                <Image
                    src={imageUrl}
                    alt={imageAlt}
                    style={{
                        objectFit: 'cover',
                        borderRadius: 10
                    }}
                    fill={true}
                ></Image>
            </div>
            <div className="p-3 md:p-4 text-sm md:text-base grid gap-4">
                <div className="grid gap-1">
                    <p className="text-primary">{categories.slice(0, 3).join(', ').concat('...')}</p>
                    <h6 className="font-bold text-xl md:text-2xl">{title}</h6>
                    <p className="font-medium text-grey"><span className="font-bold">By</span> Admin</p>
                </div>
                <p>{snippet.current}</p>
                <p className="text-grey font-medium">{date.format(postDate, 'DD MMMM YYYY')} {isEdited ? '(edited)' : ''}</p>
            </div>
        </Link>
    );
}

export default PostCard;