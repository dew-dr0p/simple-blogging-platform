const PopularPostCard = () => {
    return (
        <div className="rounded-[0.625rem] shadow-small p-3 grid grid-cols-5 gap-3 bg-white">
            <div className="rounded-[0.625rem] bg-[#D9D9D9] h-20 col-span-2"></div>
            <div className="grid gap-2 col-span-3">
                <h6 className="font-bold text-sm">Ini Adalah Judul Artikel</h6>
                <p className="text-grey font-medium text-xs">22 Agustus 2022</p>
            </div>
        </div>
    );
}

export default PopularPostCard;