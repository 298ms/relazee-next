import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    return (
        <div className='w-full h-screen container mx-auto flex flex-col items-center justify-center gap-3 text-center'>
            <h1 className='text-relazee-text-heading font-bold text-2xl'>Relazee is still in development, stay tuned!</h1>
            <Link href={`/feed`} className='bg-relazee-orange text-white rounded-lg font-medium text-sm whitespace-nowrap px-4 py-3'>Go to Homepage</Link>
        </div>
    )
}