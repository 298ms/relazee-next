'use client'

import Image from "next/image";
import Sticky from "react-stickynode";
import FilterNew from '@/public/assets/filter-new.png'
import FilterPopular from '@/public/assets/filter-popular.png'

const Filter = () => {
    return (
        <div className='bg-relazee-dark-2 rounded-2xl p-3 flex flex-col gap-2'>
            <button className='flex flex-row gap-1 items-center p-2 rounded-md text-start'>
                <Image
                    src={FilterNew}
                    alt='filter new'
                />
                <div className='flex flex-col'>
                    <h6 className='text-relazee-text-heading text-xs font-semibold'>Terbaru</h6>
                    <span className='text-xxs text-relazee-text-body-2'>Topik terbaru saat ini</span>
                </div>
            </button>
            <button className='flex flex-row gap-1 items-center p-2 rounded-md bg-relazee-dark-3 text-start'>
                <Image
                    src={FilterPopular}
                    alt='filter new'
                />
                <div className='flex flex-col'>
                    <h6 className='text-relazee-text-heading text-xs font-semibold'>Populer</h6>
                    <span className='text-xxs text-relazee-text-body-2'>Topik hangat terkini</span>
                </div>
            </button>
        </div>
    )
}

const PopularTags = () => {
    return (
        <div className='bg-relazee-dark-2 rounded-2xl p-4 flex flex-col gap-5'>
            <h5 className='text-relazee-text-heading font-semibold'>Popular Tags</h5>
            <div className='flex flex-col gap-3'>
                <div className='flex flex-col'>
                    <h6 className='text-relazee-text-heading text-xs font-semibold'>#Pimnas</h6>
                    <span className='text-xxs text-relazee-text-body-2'>82,645 Posted by this tag</span>
                </div>
                <div className='flex flex-col'>
                    <h6 className='text-relazee-text-heading text-xs font-semibold'>#Pimnas</h6>
                    <span className='text-xxs text-relazee-text-body-2'>82,645 Posted by this tag</span>
                </div>
                <div className='flex flex-col'>
                    <h6 className='text-relazee-text-heading text-xs font-semibold'>#Pimnas</h6>
                    <span className='text-xxs text-relazee-text-body-2'>82,645 Posted by this tag</span>
                </div>
                <div className='flex flex-col'>
                    <h6 className='text-relazee-text-heading text-xs font-semibold'>#Pimnas</h6>
                    <span className='text-xxs text-relazee-text-body-2'>82,645 Posted by this tag</span>
                </div>
            </div>
        </div>
    )
}

const Feedback = () => {
    return (
        <div className='bg-relazee-dark-2 rounded-2xl p-4 flex flex-col gap-3'>
            <h5 className='text-relazee-text-heading font-semibold'>Feedback</h5>
            <p className='text-xs text-relazee-text-body-2'>Berikan umpan balik untuk membantu meningkatkan kualitas layanan kami</p>
            <button className='border border-relazee-border rounded-md text-relazee-text-heading text-xs self-start py-2 px-4'>Berikan</button>
        </div>
    )
}

export default function MahasiswaLeftSidebar() {
    return (
        <Sticky enabled={true} top={80} className='w-2/12' bottomBoundary="#feed">
            <div className='flex flex-col gap-5'>
                <Filter />
                <PopularTags />
                <Feedback />
            </div>
        </Sticky>
    )
}