import GetToKnow1 from '@/public/assets/get-to-know/1.png'
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function GetToKnow() {
    return (
        <div className='bg-relazee-dark-2 rounded-2xl p-4 flex flex-col gap-5'>
            <h5 className='font-semibold text-relazee-text-heading'>Get to Know</h5>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-row gap-3 items-center'>
                    <Image
                        src={GetToKnow1}
                        alt='apa itu relazee'
                    />
                    <div className='flex flex-col gap-1'>
                        <h6 className='text-relazee-text-heading text-xs font-semibold'>Apa itu Relazee</h6>
                        <p className='text-xxs text-relazee-text-body-2'>Pengenalan lebih jauh tentang Relazee dan layanan yang tersedia</p>
                    </div>
                    <FaArrowRight className='text-relazee-text-body-2 self-start ml-auto text-xl' />
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <Image
                        src={GetToKnow1}
                        alt='apa itu relazee'
                    />
                    <div className='flex flex-col gap-1'>
                        <h6 className='text-relazee-text-heading text-xs font-semibold'>Apa itu Relazee</h6>
                        <p className='text-xxs text-relazee-text-body-2'>Pengenalan lebih jauh tentang Relazee dan layanan yang tersedia</p>
                    </div>
                    <FaArrowRight className='text-relazee-text-body-2 self-start ml-auto text-xl' />
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <Image
                        src={GetToKnow1}
                        alt='apa itu relazee'
                    />
                    <div className='flex flex-col gap-1'>
                        <h6 className='text-relazee-text-heading text-xs font-semibold'>Apa itu Relazee</h6>
                        <p className='text-xxs text-relazee-text-body-2'>Pengenalan lebih jauh tentang Relazee dan layanan yang tersedia</p>
                    </div>
                    <FaArrowRight className='text-relazee-text-body-2 self-start ml-auto text-xl' />
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <Image
                        src={GetToKnow1}
                        alt='apa itu relazee'
                    />
                    <div className='flex flex-col gap-1'>
                        <h6 className='text-relazee-text-heading text-xs font-semibold'>Apa itu Relazee</h6>
                        <p className='text-xxs text-relazee-text-body-2'>Pengenalan lebih jauh tentang Relazee dan layanan yang tersedia</p>
                    </div>
                    <FaArrowRight className='text-relazee-text-body-2 self-start ml-auto text-xl' />
                </div>
            </div>
        </div>
    )
}