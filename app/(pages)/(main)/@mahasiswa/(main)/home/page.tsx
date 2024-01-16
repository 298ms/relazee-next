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
import { MdChat, MdPersonSearch, MdPostAdd } from 'react-icons/md';
import Sticky from 'react-stickynode';
import FilterNew from '@/public/assets/filter-new.png'
import FilterPopular from '@/public/assets/filter-popular.png'
import { IoMdThumbsDown, IoMdThumbsUp } from "react-icons/io";
import { FaArrowRight } from 'react-icons/fa';
import OrmawaDummyLogo from '@/public/assets/ormawa-logo.png'
import GetToKnow1 from '@/public/assets/get-to-know/1.png'

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

const Box = ({ index }: { index: any }) => {
    return (
        <div className='rounded-md w-full h-16 border border-2 border-black flex items-center justify-center'>
            <span className='font-bold text-2xl'>{index}</span>
        </div>
    )
}

const ToggleSwitch = ({ isOn, handleSwitch, label }: any) => {
    // https://tailwind-elements.com/docs/standard/forms/switch/

    return (
        <div className="flex gap-2 ml-14">
            <label
                className="inline-block pl-[0.15rem] hover:cursor-pointer font-medium text-sm text-relazee-text-heading"
                htmlFor="flexSwitchChecked"
            >{label}</label>
            <input
                type="checkbox"
                checked={isOn}
                onChange={handleSwitch}
                role="switch"
                id="flexSwitchChecked"
                className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
            />
        </div>
    );
};

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

    const [isAnon, setIsAnon] = useState(false)
    const handleAnon = () => {
        setIsAnon(!isAnon);
    };

    const [post, setPost] = useState('')
    const [hashtag, setHashtag] = useState('')
    const [expandPostInput, setExpandPostInput] = useState(false)

    return (
        <div>
            {/* Topbar */}
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
                            <div className="bg-center bg-cover w-10 h-10 aspect-square rounded-md border border-relazee-accent-yellow-1" style={{ backgroundImage: `url(${dummyPhoto})` }}></div>
                            <i className="text-xs"><BsCaretDownFill /></i>
                        </button>
                    </div>
                </div>
            </nav>

            <div className='flex flex-row items-start gap-5 pt-24 pb-10 container mx-auto'>
                <Sticky enabled={true} top={80} className='w-2/12' bottomBoundary="#feed">
                    <div className='flex flex-col gap-5'>
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
                        <div className='bg-relazee-dark-2 rounded-2xl p-4 flex flex-col gap-3'>
                            <h5 className='text-relazee-text-heading font-semibold'>Feedback</h5>
                            <p className='text-xs text-relazee-text-body-2'>Berikan umpan balik untuk membantu meningkatkan kualitas layanan kami</p>
                            <button className='border border-relazee-border rounded-md text-relazee-text-heading text-xs self-start py-2 px-4'>Berikan</button>
                        </div>
                    </div>
                </Sticky>
                <div className='w-7/12 flex flex-col gap-5' id='feed'>
                    {/* <div className='bg-green-500 flex flex-col gap-7 p-4'>
                        {Array.from(Array(50), (e, i) => <Box index={i} />)}
                    </div> */}
                    <div className='bg-relazee-dark-2 rounded-2xl flex flex-col gap-4 p-4'>
                        <ToggleSwitch isOn={isAnon} handleSwitch={handleAnon} label={'Anonymouse mode'} />
                        <div className='flex flex-row gap-4 items-start'>
                            <div className='bg-center bg-cover w-10 h-10 aspect-square rounded-full' style={{ backgroundImage: `url(${dummyPhoto})` }}></div>
                            <div className='flex flex-col gap-2 w-full'>
                                <textarea
                                    rows={5}
                                    value={post}
                                    onChange={(e) => setPost(e.target.value)}
                                    placeholder='Let’s share what going on your mind...'
                                    className='bg-relazee-dark-3 w-full rounded-lg px-4 p-2.5 placeholder-relazee-text-placeholder text-sm text-relazee-text-heading'
                                />
                                <input
                                    value={hashtag}
                                    onChange={(e) => setHashtag(e.target.value)}
                                    type='text'
                                    id="hashtag"
                                    className="bg-relazee-dark-3 rounded-lg block w-full px-4 p-2.5 placeholder-relazee-text-placeholder text-sm text-relazee-text-heading"
                                    placeholder="Add hashtag  ex. #Pimnas #PKM "
                                />
                            </div>
                            <button className='bg-relazee-orange text-white rounded-lg font-medium text-sm whitespace-nowrap px-4 py-3'>Create Post</button>
                        </div>
                    </div>
                    <div className='bg-relazee-dark-2 rounded-2xl flex flex-col gap-4 p-5'>
                        <div className='flex flex-row gap-3 justify-between'>
                            <div className='flex flex-row gap-2 items-center'>
                                <div className='bg-center bg-cover w-8 h-8 aspect-square rounded-full' style={{ backgroundImage: `url(${dummyPhoto})` }}></div>
                                <div className='flex flex-col'>
                                    <h4 className='text-relazee-text-heading font-semibold'>Syah Reza Pahlevi</h4>
                                    <span className='text-xs text-relazee-text-body-2'>Informatika</span>
                                </div>
                            </div>
                            <span className='text-xxs text-relazee-text-body-1'>2 hari yang lalu</span>
                        </div>
                        <p className='text-relazee-text-body-1 text-xs font-medium'>Tahun 2022 kemarin alhamdulillah aku dapet kesempatan jadi bagian dari tahap terakhir PKM yaitu Pekan Ilmiah Mahasiswa Nasional atau yang biasa kita kenal PIMNAS<br /><br />Well, dengan kesempatan itu aku pengen coba share pengalaman PKM dan PIMNAS</p>
                        <p className='text-relazee-text-body-1 text-xs font-medium'>#PIMNAS</p>
                        <div className='flex flex-row items-center gap-2 text-relazee-text-body-1'>
                            <IoMdThumbsUp />
                            <span className='text-xxs'>1055</span>
                            •
                            <IoMdThumbsDown />
                            •
                            <MdChat />
                            <span className='text-xxs'>10 Balasan</span>
                        </div>
                    </div>
                    <div className='bg-relazee-dark-2 rounded-2xl flex flex-col gap-4 p-5'>
                        <div className='flex flex-row gap-3 justify-between'>
                            <div className='flex flex-row gap-2 items-center'>
                                <div className='bg-center bg-cover w-8 h-8 aspect-square rounded-full' style={{ backgroundImage: `url(${dummyPhoto})` }}></div>
                                <div className='flex flex-col'>
                                    <h4 className='text-relazee-text-heading font-semibold'>Syah Reza Pahlevi</h4>
                                    <span className='text-xs text-relazee-text-body-2'>Informatika</span>
                                </div>
                            </div>
                            <span className='text-xxs text-relazee-text-body-1'>2 hari yang lalu</span>
                        </div>
                        <p className='text-relazee-text-body-1 text-xs font-medium'>Tahun 2022 kemarin alhamdulillah aku dapet kesempatan jadi bagian dari tahap terakhir PKM yaitu Pekan Ilmiah Mahasiswa Nasional atau yang biasa kita kenal PIMNAS<br /><br />Well, dengan kesempatan itu aku pengen coba share pengalaman PKM dan PIMNAS</p>
                        <p className='text-relazee-text-body-1 text-xs font-medium'>#PIMNAS</p>
                        <div className='flex flex-row items-center gap-2 text-relazee-text-body-1'>
                            <IoMdThumbsUp />
                            <span className='text-xxs'>1055</span>
                            •
                            <IoMdThumbsDown />
                            •
                            <MdChat />
                            <span className='text-xxs'>10 Balasan</span>
                        </div>
                    </div>
                    <div className='bg-relazee-dark-2 rounded-2xl flex flex-col gap-4 p-5'>
                        <div className='flex flex-row gap-3 justify-between'>
                            <div className='flex flex-row gap-2 items-center'>
                                <div className='bg-center bg-cover w-8 h-8 aspect-square rounded-full' style={{ backgroundImage: `url(${dummyPhoto})` }}></div>
                                <div className='flex flex-col'>
                                    <h4 className='text-relazee-text-heading font-semibold'>Syah Reza Pahlevi</h4>
                                    <span className='text-xs text-relazee-text-body-2'>Informatika</span>
                                </div>
                            </div>
                            <span className='text-xxs text-relazee-text-body-1'>2 hari yang lalu</span>
                        </div>
                        <p className='text-relazee-text-body-1 text-xs font-medium'>Tahun 2022 kemarin alhamdulillah aku dapet kesempatan jadi bagian dari tahap terakhir PKM yaitu Pekan Ilmiah Mahasiswa Nasional atau yang biasa kita kenal PIMNAS<br /><br />Well, dengan kesempatan itu aku pengen coba share pengalaman PKM dan PIMNAS</p>
                        <p className='text-relazee-text-body-1 text-xs font-medium'>#PIMNAS</p>
                        <div className='flex flex-row items-center gap-2 text-relazee-text-body-1'>
                            <IoMdThumbsUp />
                            <span className='text-xxs'>1055</span>
                            •
                            <IoMdThumbsDown />
                            •
                            <MdChat />
                            <span className='text-xxs'>10 Balasan</span>
                        </div>
                    </div>
                </div>
                <Sticky enabled={true} top={80} className='w-3/12' bottomBoundary="#feed">
                    {/* <div className='bg-red-500 flex flex-col gap-7 p-4'>
                        {Array.from(Array(16), (e, i) => <Box index={i} />)}
                    </div> */}
                    <div className='flex flex-col gap-5'>
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
                        <div className='bg-relazee-dark-2 rounded-2xl p-4 flex flex-col gap-3'>
                            <h5 className='text-relazee-text-heading font-semibold'>Donasi</h5>
                            <p className='text-xs text-relazee-text-body-2'>Jika Anda merasa terbantu dengan layanan kami, dukung kami di sini untuk peningkatan kualitas pelayanan yang kami berikan.</p>
                            <button className='border border-relazee-border rounded-md text-relazee-text-heading text-xs self-start py-2 px-4'>Beri Dukungan</button>
                        </div>
                    </div>
                </Sticky>
            </div>
        </div>
    )
}