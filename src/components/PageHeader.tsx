'use client'
import Image from "next/image";
import Link from "next/link";
import SearchIcon from '/public/images/search.svg'
import GreenSearchIcon from '/public/images/search-green.svg'
import NavIcon from '/public/images/burger.svg'
import CloseIcon from '/public/images/burger-close.svg'
import { useEffect, useState } from "react";
import PopularPostList from "./PopularPostList";
import usePostStore from "@/store/postStore";
import { useRouter } from "next/navigation";

const PageHeader = () => {
    const [search, setSearch] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')

    const searchResults = usePostStore((state: any) => state.searchResults)
    const searchPosts = usePostStore((state: any) => state.searchPosts)

    const router = useRouter()

    const handleOpenNavBar = () => {
        setIsOpen(true)
    }

    const handleCloseNavBar = () => {
        setIsOpen(false)
    }

    const handleSearchInput = (e: any) => {
        setSearchTerm(e.target.value)
        console.log(e.target.value)
        console.log(searchTerm)
        searchPosts(e.target.value)
        console.log(searchResults)
    }

    const handleSearch = () => {
        if(searchTerm) setSearchTerm('')
        setSearch(!search)
    }
    
    useEffect(() => {
        if(searchTerm.length >= 0 && search) router.push(`/posts/search?query=${searchTerm}`)
        if(!search) router.push('/')
        console.log(searchTerm)
    }, [search, searchTerm, router])

    return (
        <header className="bg-primary w-full text-white sticky top-0 z-50">
            <div className="container-blog py-3 grid grid-flow-col justify-between items-center">
                <Link href={'/'}><h1 className="font-bold text-3xl md:text-4xl">Simple Blog App</h1></Link>
                <nav className="lg:flex gap-5 items-center hidden font-semibold">
                    <Link href={'#'}>Nature</Link>
                    <Link href={'#'}>Nature</Link>
                    <Link href={'#'}>Nature</Link>
                    <Link href={'/posts/create'}>Create</Link>
                    <input type="text" value={searchTerm} onChange={handleSearchInput} className={`bg-[#D9D9D9] ${search ? 'block' : 'hidden'} text-grey focus-visible:outline-none p-3 py-2 text-sm rounded-[0.625rem]`} />
                    {search ? <Image src={CloseIcon} alt="Close Icon" onClick={handleSearch} className="w-4" /> : <Image src={SearchIcon} alt="Search Icon" onClick={handleSearch}></Image>}
                </nav>
                <Image src={NavIcon} onClick={handleOpenNavBar} alt="Navigation Menu Icon" className="lg:hidden cursor-pointer" />
            </div>
            <div className={`fixed ${isOpen ? 'grid' : ' hidden'} bg-primary text-black container-blog pb-12 md:pb-20 pt-4 w-full top-0 z-50 gap-5 md:gap-10 lg:hidden`}>
                <Image src={CloseIcon} onClick={handleCloseNavBar} alt="Close Navigation Menu Icon" className="justify-self-end cursor-pointer" />
                <div className="md:px-32 grid gap-5 md:gap-5">
                    <form className="bg-[#D9D9D9] rounded-[0.625rem] flex justify-between items-center">
                        <input type="text" className="bg-transparent text-grey focus-visible:outline-none font-bold p-4 text-sm" />
                        <Image src={GreenSearchIcon} alt="Search Icon" className="p-4 w-5 box-content place-self-center fill-primary" onClick={() => setSearch(!search)}></Image>
                    </form>
                    <nav className="grid gap-5 font-bold text-white text-3xl mb-32 md:mb-24">
                        <Link href={'#'}>Nature</Link>
                        <Link href={'#'}>Nature</Link>
                        <Link href={'#'}>Nature</Link>
                        <Link href={'/posts/create'}>Create</Link>
                    </nav>
                    <PopularPostList />
                </div>
            </div>
        </header>
    );
}

export default PageHeader;