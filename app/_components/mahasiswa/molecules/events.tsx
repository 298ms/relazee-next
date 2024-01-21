import OrmawaDummyLogo from '@/public/assets/ormawa-logo.png'
import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa";

export default function Events() {
    return (
        <div className='bg-relazee-dark-2 rounded-2xl p-4 flex flex-col gap-5'>
            <div className='flex flex-row items-center gap-2 text-relazee-text-heading'>
                <h5 className='font-semibold'>Events</h5>
                <FaArrowRight />
            </div>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-row gap-2'>
                    <div className='bg-relazee-dark-3 flex flex-col items-center text-center gap-2 py-1 w-11 rounded-md'>
                        <h6 className='font-semibold text-sm text-relazee-text-heading'>FEB</h6>
                        <span className='font-bold text-relazee-accent-blue-1 text-2xl'>7</span>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h6 className='text-sm text-relazee-text-heading font-semibold'>Sosialisasi PKM 2024</h6>
                        <div className='flex flex-row items-center gap-2 font-semibold text-xxs text-relazee-text-body-2'>
                            <Image
                                src={OrmawaDummyLogo}
                                alt='ormawa logo'
                            />
                            <span>UNEJ</span>
                            •
                            <span>Auditorium unej</span>
                        </div>
                        <div className='flex flex-row items-center gap-2 text-xxs font-semibold text-relazee-text-body-3'>
                            <span className='bg-relazee-dark-3 rounded-2xl py-1 px-2'>05.05 - 06.06 WIB</span>
                            <span className='bg-relazee-dark-3 rounded-2xl py-1 px-2'>Offline</span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row gap-2'>
                    <div className='bg-relazee-dark-3 flex flex-col items-center text-center gap-2 py-1 w-11 rounded-md'>
                        <h6 className='font-semibold text-sm text-relazee-text-heading'>FEB</h6>
                        <span className='font-bold text-relazee-accent-blue-1 text-2xl'>7</span>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h6 className='text-sm text-relazee-text-heading font-semibold'>Sosialisasi PKM 2024</h6>
                        <div className='flex flex-row items-center gap-2 font-semibold text-xxs text-relazee-text-body-2'>
                            <Image
                                src={OrmawaDummyLogo}
                                alt='ormawa logo'
                            />
                            <span>UNEJ</span>
                            •
                            <span>Auditorium unej</span>
                        </div>
                        <div className='flex flex-row items-center gap-2 text-xxs font-semibold text-relazee-text-body-3'>
                            <span className='bg-relazee-dark-3 rounded-2xl py-1 px-2'>05.05 - 06.06 WIB</span>
                            <span className='bg-relazee-dark-3 rounded-2xl py-1 px-2'>Offline</span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row gap-2'>
                    <div className='bg-relazee-dark-3 flex flex-col items-center text-center gap-2 py-1 w-11 rounded-md'>
                        <h6 className='font-semibold text-sm text-relazee-text-heading'>FEB</h6>
                        <span className='font-bold text-relazee-accent-blue-1 text-2xl'>7</span>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h6 className='text-sm text-relazee-text-heading font-semibold'>Sosialisasi PKM 2024</h6>
                        <div className='flex flex-row items-center gap-2 font-semibold text-xxs text-relazee-text-body-2'>
                            <Image
                                src={OrmawaDummyLogo}
                                alt='ormawa logo'
                            />
                            <span>UNEJ</span>
                            •
                            <span>Auditorium unej</span>
                        </div>
                        <div className='flex flex-row items-center gap-2 text-xxs font-semibold text-relazee-text-body-3'>
                            <span className='bg-relazee-dark-3 rounded-2xl py-1 px-2'>05.05 - 06.06 WIB</span>
                            <span className='bg-relazee-dark-3 rounded-2xl py-1 px-2'>Offline</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}