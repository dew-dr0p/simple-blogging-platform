// 'use client'
import usePostStore from "@/store/postStore";

const BannerImage = () => {
    // const posts = usePostStore((state: any) => state.posts)
    // console.log(posts)

    return (
        <div className="bg-[#D9D9D9] shadow-big grid p-5 items-end min-h-[396px] rounded-[0.625rem]">
            <div className="grid text-sm md:text-base">
                <p>In Label</p>
                <h3 className="md:text-3xl text-2xl font-bold">Ini Adalah Judul Artikel</h3>
                <p className="font-medium"><span className="font-bold">By</span> Ridho Satriawan</p>
            </div>
        </div>
    );
}

export default BannerImage;