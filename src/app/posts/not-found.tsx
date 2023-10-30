import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='grid gap-4 lg:gap-6 col-span-8 place-items-center text-center m-auto'>
        <h2 className='text-primary text-5xl md:text-7xl lg:text-9xl font-normal'>404</h2>
        <h3 className='font-bold text-xl md:text-3xl lg:text-5xl'>Page Not Found</h3>
        <p>Oops! The page you&#39;re looking for does not exist. It might have been moved or deleted.</p>
        <Link href="/" className='bg-primary text-white p-3 px-7'>Return Home</Link>
    </div>
  )
}