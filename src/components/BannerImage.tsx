import Image from "next/image";

const BannerImage = ({
        imageUrl,
        imageAlt,
        title
    }:{
        imageUrl: string
        imageAlt: string
        title: string
    }) => {

    return (
        <div className="bg-[#D9D9D9] shadow-big grid items-end min-h-[396px] relative rounded-[0.625rem]">
            <Image
                src={imageUrl}
                alt={imageAlt}
                fill={true}
                style={{
                    borderRadius: 10
                }}
                priority={true}
            ></Image>
            <div className="grid gap-1 p-5 text-sm md:text-base relative z-10 text-white bg-white bg-opacity-20 bg-blend-screen ">
                <p className="text-primary">In Label</p>
                <h3 className="md:text-3xl text-2xl font-bold">{title}</h3>
                <p className="font-medium text-black"><span className="font-bold">By</span> Ridho Satriawan</p>
            </div>
        </div>
    );
}

export default BannerImage;