'use client'
import Image from "next/image";
import Link from "next/link";
import SearchImage from '/public/images/search.svg'
import NavIcon from '/public/images/burger.svg'
import NavClose from '/public/images/burger-close.svg'
import { useState } from "react";

const PageHeader = () => {
    const [search, setSearch] = useState(false)

    return (
        <header className="bg-primary w-full text-white relative">
            <div className="container-blog py-3 grid grid-flow-col justify-between items-center">
                <Link href={'/'}><h1 className="font-bold text-3xl md:text-4xl">Simple Blog App</h1></Link>
                <nav className="lg:flex gap-5 items-center hidden font-semibold">
                    <Link href={'#'}>Nature</Link>
                    <Link href={'#'}>Nature</Link>
                    <Link href={'#'}>Nature</Link>
                    <Link href={'#'}>Nature</Link>
                    {search && <input type="text" className="bg-[#D9D9D9] text-grey focus-visible:outline-none p-3 py-2 text-sm rounded-[0.625rem]" />}
                    <Image src={SearchImage} alt="Search Icon" onClick={() => setSearch(!search)}></Image>
                </nav>
                <Image src={NavIcon} alt="Navigation Menu Icon" className="lg:hidden" />
            </div>
            <div className="absolute bg-primary w-full top-0 grid lg:hidden">
                <Image src={NavClose} alt="Close Navigation Menu Icon" />
                Enter
            </div>
        </header>
    );
}

export default PageHeader;