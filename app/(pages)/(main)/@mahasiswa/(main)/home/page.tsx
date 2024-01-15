'use client'

import RelazeeLogoWithText from '@/public/assets/relazee-logo-with-text.png'
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { BsCaretDownFill, BsSearch } from 'react-icons/bs';
import { GoBellFill, GoHomeFill } from "react-icons/go";
import { HiChatBubbleOvalLeftEllipsis, HiMiniChatBubbleBottomCenterText } from 'react-icons/hi2';
import { IoTrophy } from 'react-icons/io5';
import { MdPersonSearch, MdPostAdd } from 'react-icons/md';

const dummyPhoto = 'https://source.unsplash.com/random/?person'

function ProfileDropdown({ mahasiswaData }: any) {
    const router = useRouter()

    return (
        <div className='bg-relazee-dark-2 rounded-lg pt-6 flex flex-col gap-3 shadow-lg text-relazee-text-heading'>
            <div className='flex flex-row gap-3 items-center justify-between px-6'>
                <div className='bg-center bg-cover w-9 aspect-square rounded-full' style={{ backgroundImage: `url(${dummyPhoto})` }}></div>
                <div className='flex flex-col'>
                    <h4 className='font-medium'>Putra Handoko</h4>
                    <span className='text-gray-400 text-sm'>@handoko</span>
                </div>
            </div>
            <div className='flex flex-col'>
                <Link href={`/profile/handoko`} className='px-6 py-3 hover:bg-relazee-dark-3'>Profile Saya</Link>
                <a href="#" className='px-6 py-3 hover:bg-relazee-dark-3'>Pengaturan Akun</a>
                <a href="#" className='px-6 py-3 hover:bg-relazee-dark-3'>Preferensi</a>
                <button onClick={() => { }} className='px-6 py-3 hover:bg-red-500 hover:text-white rounded-b-lg text-start'>Sign Out</button>
            </div>
        </div>
    )
}

export default function MahasiswaHome() {
    const [search, setSearch] = useState('')
    const [showProfileDropdown, setShowProfileDropdown] = useState(false)
    const [showSearchDropdown, setShowSearchDropdown] = useState(false)
    const [mahasiswaData, setMahasiswaData] = useState<any>(null)

    const profileDropdownRef = useRef<HTMLDivElement>(null)
    const searchDropdownRef = useRef<HTMLDivElement>(null)

    const closeDropdown = (e: Event) => {
        if (profileDropdownRef.current && showProfileDropdown && !profileDropdownRef.current.contains(e.target as Node)) {
            setShowProfileDropdown(false)
        }
        if (searchDropdownRef.current && showSearchDropdown && !searchDropdownRef.current.contains(e.target as Node)) {
            setShowSearchDropdown(false)
        }
    }
    useEffect(() => {
        document.addEventListener('mousedown', closeDropdown)
    })

    return (
        <div>
            {/* Topbar */}
            <nav className="bg-relazee-dark-2 py-3 fixed top-0 left-0 right-0 relative">
                {showProfileDropdown && <div className='absolute right-5 top-14 z-10' ref={profileDropdownRef}>
                    <ProfileDropdown mahasiswaData={mahasiswaData} />
                </div>}
                <div className='container mx-auto flex flex-row items-center justify-between'>
                    <Image
                        src={RelazeeLogoWithText}
                        alt='relazee logo'
                    />
                    <div className='flex flex-row items-center gap-4'>
                        <ul className='flex flex-row items-center gap-4 text-relazee-icon-nav text-xl'>
                            <li><Link href={'/home'} className='w-10 h-10 rounded-md bg-relazee-primary flex items-center justify-center'><GoHomeFill /></Link></li>
                            <li><Link href={'/home'} className='w-10 h-10 rounded-md flex items-center justify-center'><MdPersonSearch /></Link></li>
                            <li><Link href={'/home'} className='w-10 h-10 rounded-md flex items-center justify-center'><IoTrophy /></Link></li>
                            <li><Link href={'/home'} className='w-10 h-10 rounded-md flex items-center justify-center'><MdPostAdd /></Link></li>
                            <li><Link href={'/home'} className='w-10 h-10 rounded-md flex items-center justify-center'><HiMiniChatBubbleBottomCenterText /></Link></li>
                        </ul>
                        <div className="relative w-full">
                            <input
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                type='text'
                                id="search"
                                className="bg-relazee-dark-3 rounded-lg block w-full px-4 p-2.5 placeholder-relazee-text-placeholder"
                                placeholder="Type here to search..."
                            />
                            <button
                                onClick={() => { }}
                                className="flex absolute inset-y-0 right-0 items-center pr-5"
                            >
                                {/* <i className={`bi ${showPassword ? 'bi-eye-fill' : 'bi-eye-slash-fill'} text-gray-500`}></i> */}
                                <BsSearch className='text-relazee-text-placeholder' />
                            </button>
                        </div>
                    </div>
                    <div className='flex flex-row items-center gap-4 text-relazee-icon-nav'>
                        <ul className='flex flex-row items-center gap-4 text-xl'>
                            <li><Link href={'/home'} className='w-10 h-10 rounded-md bg-relazee-dark-3 flex items-center justify-center'><HiChatBubbleOvalLeftEllipsis /></Link></li>
                            <li><Link href={'/home'} className='w-10 h-10 rounded-md bg-relazee-dark-3 flex items-center justify-center'><GoBellFill /></Link></li>
                        </ul>
                        <button onClick={() => setShowProfileDropdown(!showProfileDropdown)} className='flex flex-row items-center gap-2'>
                            <div className="bg-center bg-cover w-10 h-10 aspect-square rounded-md border border-relazee-accent-yellow-1" style={{ backgroundImage: `url(${dummyPhoto})` }}></div>
                            <i className="text-xs"><BsCaretDownFill /></i>
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    )
}