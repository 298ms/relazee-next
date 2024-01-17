'use client'

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Sticky from "react-stickynode";
import OrmawaDummyLogo from '@/public/assets/ormawa-logo.png'
import GetToKnow1 from '@/public/assets/get-to-know/1.png'

const Events = () => {
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

const GetToKnow = () => {
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

const Donation = () => {
    return (
        <div className='bg-relazee-dark-2 rounded-2xl p-4 flex flex-col gap-3'>
            <h5 className='text-relazee-text-heading font-semibold'>Donasi</h5>
            <p className='text-xs text-relazee-text-body-2'>Jika Anda merasa terbantu dengan layanan kami, dukung kami di sini untuk peningkatan kualitas pelayanan yang kami berikan.</p>
            <button className='border border-relazee-border rounded-md text-relazee-text-heading text-xs self-start py-2 px-4'>Beri Dukungan</button>
        </div>
    )
}

export default function MahasiswaRightSidebar() {
    return (
        <Sticky enabled={true} top={80} className='w-3/12' bottomBoundary="#feed">
            <div className='flex flex-col gap-5 pb-5'>
                <Events />
                <GetToKnow />
                <Donation />
            </div>
        </Sticky>
    )
}