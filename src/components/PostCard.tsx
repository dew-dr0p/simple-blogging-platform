import usePostStore from "@/store/postStore";
import date from 'date-and-time'

const PostCard = () => {
    const post = usePostStore((state: any) => state.posts[3])
    post ? console.log(post, post.created_at, date.format(new Date(post.created_at), 'DD MMMM YYYY')) : ''
    console.log()

    return (
        <div className="rounded-[0.625rem] bg-white shadow-big">
            <div className="bg-[#D9D9D9] rounded-[0.625rem] h-48"></div>
            <div className="p-3 md:p-4 text-sm md:text-base grid gap-4">
                <div className="grid gap-0.5">
                    <p className="text-primary">In Label</p>
                    <h6 className="font-bold text-xl md:text-2xl">Ini Adalah Judul Artikel</h6>
                    <p className="font-medium text-grey"><span className="font-bold">By</span> Ridho Satriawan</p>
                </div>
                <p>Apa itu HTML ? Buat kamu yang pernah membuat sebuah website pastinya sudah tidak asing lagi dengan yang namanya HTML. S…</p>
                <p className="text-grey font-medium">{date.format(new Date(post?.created_at), 'DD MMMM YYYY')}</p>
            </div>
        </div>
    );
}

export default PostCard;