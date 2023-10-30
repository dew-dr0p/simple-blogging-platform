// CreatePageIcon component
// This is the component that floats over the screen linking to the create page.
'use client'
import Link from "next/link";
import { useEffect, useState } from "react";

const CreatePageIcon = () => {
    const [scroll, setScroll] = useState(false)

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
        const handleScroll = () => {
            // Check the scroll position to determine if the button should be shown
            if (window.scrollY > 100) {
              setScroll(true);
            } else {
              setScroll(false);
            }
          };
        // Attach the event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return (
        <div>
            {scroll && <Link href={'/posts/create'} className="fixed bottom-5 md:bottom-10 lg:bottom-20 bg-transparent right-5 md:right-10 lg:right-20 opacity-50 grid grid-flow-col items-center" id="icon">
                <div className="bg-white text-primary hidden items-center p-2 md:p-3 font-bold shadow-small">Create New Post</div>
                <div className="bg-primary rounded-[50%] grid p-3 md:p-5 place-items-center w-fit shadow-small">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" fill="#fff" className="scale-100 md:scale-150" viewBox="0 -960 960 960" width="24"><path d="M560-80v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T903-300L683-80H560Zm300-263-37-37 37 37ZM620-140h38l121-122-18-19-19-18-122 121v38ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v120h-80v-80H520v-200H240v640h240v80H240Zm280-400Zm241 199-19-18 37 37-18-19Z"/></svg>
                </div>
            </Link>}
        </div>
    );
}

export default CreatePageIcon;