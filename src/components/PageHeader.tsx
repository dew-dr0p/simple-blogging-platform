import Image from "next/image";
import Link from "next/link";
import SearchImage from '/public/images/search.svg'
import NavIcon from '/public/images/burger.svg'

const PageHeader = () => {
    return (
        <header className="bg-primary w-full text-white">
            <div className="container-blog py-3 grid grid-flow-col justify-between items-center">
                <h1 className="font-bold text-3xl md:text-4xl">Simple Blog App</h1>
                <nav className="lg:flex gap-5 items-center hidden font-semibold">
                    <Link href={'#'}>Nature</Link>
                    <Link href={'#'}>Nature</Link>
                    <Link href={'#'}>Nature</Link>
                    <Link href={'#'}>Nature</Link>
                    <Image src={SearchImage} alt="Search Icon"></Image>
                </nav>
                <Image src={NavIcon} alt="Navigation Menu Icon" className="lg:hidden" />
            </div>
        </header>
    );
}

export default PageHeader;