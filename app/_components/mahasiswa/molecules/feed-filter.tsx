import Image from "next/image"
import { useState } from "react"
import FilterPopular from '@/public/assets/filter-popular.png'
import FilterNew from '@/public/assets/filter-new.png'

export default function FeedFilter() {
    const [filter, setFilter] = useState('terbaru')

    return (
        <div className='bg-relazee-dark-2 rounded-2xl p-3 flex flex-col gap-2'>
            <button
                className={`flex flex-row gap-1 items-center p-2 rounded-md text-start transition-all ${filter == 'terbaru' ? 'bg-relazee-dark-3' : ''}`}
                onClick={() => setFilter('terbaru')}
            >
                <Image
                    src={FilterNew}
                    alt='filter new'
                />
                <div className='flex flex-col'>
                    <h6 className='text-relazee-text-heading text-xs font-semibold'>Terbaru</h6>
                    <span className='text-xxs text-relazee-text-body-2'>Topik terbaru saat ini</span>
                </div>
            </button>
            <button
                className={`flex flex-row gap-1 items-center p-2 rounded-md text-start transition-all ${filter == 'populer' ? 'bg-relazee-dark-3' : ''}`}
                onClick={() => setFilter('populer')}
            >
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