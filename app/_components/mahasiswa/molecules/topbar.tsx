'use client'

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { BsCaretDownFill, BsSearch } from "react-icons/bs"
import { GoBellFill, GoHomeFill } from "react-icons/go"
import { HiChatBubbleOvalLeftEllipsis, HiMiniChatBubbleBottomCenterText } from "react-icons/hi2"
import { IoTrophy } from "react-icons/io5"
import { MdPersonSearch, MdPostAdd } from "react-icons/md"
import RelazeeLogoWithText from '@/public/assets/relazee-logo-with-text.png'

const dummyPhoto = 'https://source.unsplash.com/random/?person'

function ProfileDropdown({ mahasiswaData }: any) {
    const router = useRouter()

    return (
        <div className='bg-relazee-dark-2 rounded-lg pt-6 flex flex-col gap-3 shadow-lg text-relazee-text-heading'>
            <div className='flex flex-row gap-3 items-center justify-between px-6'>
                <div className='bg-center bg-cover w-9 aspect-square rounded-full' style={{ backgroundImage: `url(${dummyPhoto})` }}></div>
                <div className='flex flex-col'>
                    <h4 className='font-semibold'>Putra Handoko</h4>
                    <span className='text-relazee-text-body-2 text-sm'>@handoko</span>
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

export default function MahasiswaTopbar() {
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
        <nav className="bg-relazee-dark-2 py-3 fixed top-0 left-0 right-0 z-10">
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
                        <li><Link href={'/partner'} className='w-10 h-10 rounded-md flex items-center justify-center'><MdPersonSearch /></Link></li>
                        <li><Link href={'/home'} className='w-10 h-10 rounded-md flex items-center justify-center'><IoTrophy /></Link></li>
                        <li><Link href={'/home'} className='w-10 h-10 rounded-md flex items-center justify-center'><MdPostAdd /></Link></li>
                        <li>
                            <Link href={'/home'} className='w-10 h-10 rounded-md flex items-center justify-center'>
                                <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.0403 18.3014L19.5984 15.8595C19.4882 15.7493 19.3388 15.6881 19.182 15.6881H18.7828C19.4588 14.8235 19.8605 13.736 19.8605 12.553C19.8605 9.73882 17.5802 7.45856 14.766 7.45856C11.9518 7.45856 9.67154 9.73882 9.67154 12.553C9.67154 15.3672 11.9518 17.6475 14.766 17.6475C15.949 17.6475 17.0365 17.2458 17.9011 16.5698V16.969C17.9011 17.1258 17.9623 17.2752 18.0725 17.3854L20.5144 19.8273C20.7446 20.0576 21.1169 20.0576 21.3447 19.8273L22.0379 19.1342C22.2681 18.904 22.2681 18.5317 22.0403 18.3014ZM14.766 15.6881C13.0344 15.6881 11.6309 14.2871 11.6309 12.553C11.6309 10.8214 13.0319 9.41797 14.766 9.41797C16.4976 9.41797 17.9011 10.8189 17.9011 12.553C17.9011 14.2846 16.5001 15.6881 14.766 15.6881Z" fill="#F4F6F8" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M1.85235 0H16.6711C17.6899 0 18.5235 0.833556 18.5235 1.85235V7.42456C17.4013 6.42598 15.9227 5.81932 14.3024 5.81932C10.7943 5.81932 7.95033 8.66323 7.95033 12.1714C7.95033 13.1162 8.15662 14.0129 8.52661 14.8188H3.70469L0 18.5235V1.85235C0 0.833556 0.833556 0 1.85235 0Z" fill="#F4F6F8" />
                                </svg>
                            </Link>
                        </li>
                    </ul>
                    <div className="relative w-full">
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            type='text'
                            id="search"
                            className="bg-relazee-dark-3 rounded-lg block w-full px-4 p-2.5 placeholder-relazee-text-placeholder text-sm text-relazee-text-heading"
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
                        <div className="rounded-md w-10 h-10 flex items-center justify-center bg-transparent border border-relazee-accent-yellow-1">
                            <div className="bg-center bg-cover w-8 h-8 aspect-square rounded" style={{ backgroundImage: `url(${dummyPhoto})` }}></div>
                        </div>
                        <i className="text-xs"><BsCaretDownFill /></i>
                    </button>
                </div>
            </div>
        </nav>
    )
}