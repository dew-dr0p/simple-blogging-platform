const PostCard = () => {
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
                <p className="text-grey font-medium">22 Agustus 2022</p>
            </div>
        </div>
    );
}

export default PostCard;