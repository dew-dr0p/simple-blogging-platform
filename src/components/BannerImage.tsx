import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const BannerImage = ({
        imageUrl,
        imageAlt,
        categories,
        title,
        loading
    }:{
        imageUrl: string
        imageAlt: string
        categories: Array<string>
        title: string
        loading: boolean
    }) => {

        // Generate slug from title
        const slug = title?.replaceAll(' ', '_').replaceAll(':', '').toLowerCase()

    return (
        <Link href={`/posts/${slug}`} className="bg-[#D9D9D9] shadow-big grid items-end min-h-[396px] relative rounded-[0.625rem]">
                {!loading && <Image
                    src={imageUrl}
                    alt={imageAlt}
                    fill={true}
                    style={{
                        borderRadius: 10
                    }}
                    // priority={true}
                ></Image>}
            <div className="grid gap-1 p-5 text-sm md:text-base relative z-10 text-white bg-white bg-opacity-40 bg-blend-screen background-blur">
                <p className="text-primary bg-white rounded p-1">{loading ? <Skeleton baseColor="#616161" className="opacity-50" /> : categories?.join(', ')}</p>
                <h3 className="md:text-3xl text-2xl font-bold">{loading ? <Skeleton count={2} baseColor="#616161" className="opacity-50" /> : title}</h3>
                {loading ? <Skeleton baseColor="#616161" className="opacity-50" /> : <p className="font-medium text-black"><span className="font-bold">By</span> Admin</p>}
            </div>
        </Link>
    );
}

export default BannerImage;