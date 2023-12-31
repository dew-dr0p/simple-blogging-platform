import Image from "next/image";
import date from 'date-and-time'
import Link from "next/link";

const PopularPostCard = ({
        isEdited,
        title,
        imageUrl,
        imageAlt,
        postDate,
    }:{
        isEdited: boolean,
        title: string,
        imageUrl: string,
        imageAlt: string,
        postDate: Date
    }) => {

        // Generate slug from title
        const slug = title?.replaceAll(' ', '_').replaceAll(':', '').toLowerCase()

    return (
        <Link href={`/posts/${slug}`} className="rounded-[0.625rem] shadow-small p-3 grid grid-cols-5 gap-3 bg-white">
            <div className="rounded-[0.625rem] bg-[#D9D9D9] relative h-full col-span-2">
                <Image
                    src={imageUrl}
                    alt={imageAlt}
                    fill={true}
                    style={{
                        objectFit: 'cover',
                        borderRadius: 10
                    }}
                ></Image>
            </div>
            <div className="grid gap-2 col-span-3 h-fit">
                <h6 className="font-bold text-sm">{title}</h6>
                <p className="text-grey font-medium text-xs">{date.format(postDate, 'DD MMMM YYYY')} {isEdited ? '(edited)' : ''}</p>
            </div>
        </Link>
    );
}

export default PopularPostCard;