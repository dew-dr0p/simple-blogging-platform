const SectionHeader = ({ Title }: { Title: string}) => {
    return (
        <div className="bg-primary w-full h-fit text-white justify-center items-center grid py-3 shadow-small text-xl font-bold rounded-[0.625rem]">
            <h5>{Title}</h5>
        </div>
    );
}

export default SectionHeader;