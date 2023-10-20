import Image from "next/image";
import date from 'date-and-time'

const PostCard = ({
        title,
        imageUrl,
        imageAlt,
        postDate,
        postContent,
    }:{
        title: string,
        imageUrl: string,
        imageAlt: string,
        postDate: Date,
        postContent: string
    }) => {

        // Convert content HTML to plain text
        const temporaryDiv = document.createElement("div");
        temporaryDiv.innerHTML = postContent;
        const plainText = temporaryDiv.innerText;
        const snippet = plainText.slice(0, 100).concat('...')
        console.log(plainText, snippet)

    return (
        <div className="rounded-[0.625rem] bg-white shadow-big">
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
                    <p className="text-primary">In Label</p>
                    <h6 className="font-bold text-xl md:text-2xl">{title}</h6>
                    <p className="font-medium text-grey"><span className="font-bold">By</span> Admin</p>
                </div>
                <p>{snippet}</p>
                <p className="text-grey font-medium">{date.format(postDate, 'DD MMMM YYYY')}</p>
            </div>
        </div>
    );
}

export default PostCard;