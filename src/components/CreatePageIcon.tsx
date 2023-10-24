'use client'
import Link from "next/link";
import { useEffect, useState } from "react";

const CreatePageIcon = () => {
    const [scroll, setScroll] = useState(true)

    useEffect(() => {
        const createIcon = document.getElementById('icon')
        createIcon?.addEventListener('mouseover', () => {
            createIcon.classList.remove('opacity-50')
            createIcon.firstElementChild?.classList.remove('hidden')
            createIcon.firstElementChild?.classList.add('grid')
        })
        createIcon?.addEventListener('mouseout', () => {
            createIcon.classList.add('opacity-50')
            createIcon.firstElementChild?.classList.remove('grid')
            createIcon.firstElementChild?.classList.add('hidden')
        })
    })

    useEffect(() => {
        // document.addEventListener('scroll', () => {
        //     setScroll(true)
        //     // removeEventListener('scroll')
        // })
    }, [])

    return (
        <div>
            {scroll && <Link href={'/posts/create'} className="fixed bottom-20 bg-transparent right-20 opacity-50 grid grid-flow-col items-center" id="icon">
                <div className="bg-white text-primary hidden items-center p-3 font-bold shadow-small">Create New Post</div>
                <div className="bg-primary rounded-[50%] grid p-5 place-items-center w-fit shadow-small">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" fill="#fff" className="scale-150" viewBox="0 -960 960 960" width="24"><path d="M560-80v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T903-300L683-80H560Zm300-263-37-37 37 37ZM620-140h38l121-122-18-19-19-18-122 121v38ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v120h-80v-80H520v-200H240v640h240v80H240Zm280-400Zm241 199-19-18 37 37-18-19Z"/></svg>
                </div>
            </Link>}
        </div>
    );
}

export default CreatePageIcon;