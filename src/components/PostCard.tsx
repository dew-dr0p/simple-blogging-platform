import Image from "next/image";
import date from 'date-and-time'
import Link from "next/link";
import usePostStore from "@/store/postStore";

const PostCard = ({
        id,
        title,
        imageUrl,
        imageAlt,
        categories,
        postDate,
        postContent,
    }:{
        id: string
        title: string,
        imageUrl: string,
        imageAlt: string,
        categories: Array<string>,
        postDate: Date,
        postContent: string
    }) => {
        const fetchPost = usePostStore((state: any) => state.fetchPost)
        const selectedPost = usePostStore((state: any) => state.selectedPost)

        // Convert content HTML to plain text
        const temporaryDiv = document.createElement("div");
        temporaryDiv.innerHTML = postContent;
        const plainText = temporaryDiv.innerText;
        const snippet = plainText.slice(0, 100).concat('...')

        // Generate slug from title
        const slug = title.replaceAll(' ', '_').replaceAll(':', '').toLowerCase()
        // console.log(slug)

        const handlePostClick = () => {
            fetchPost(id)
            console.log(selectedPost)
        }

    return (
        <Link href={`/posts/${slug}`} onClick={handlePostClick} className="rounded-[0.625rem] bg-white shadow-big">
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
                <p>{snippet}</p>
                <p className="text-grey font-medium">{date.format(postDate, 'DD MMMM YYYY')}</p>
            </div>
        </Link>
    );
}

export default PostCard;