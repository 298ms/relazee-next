'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BsArrowLeftShort, BsExclamationCircle, BsShareFill, BsThreeDots } from "react-icons/bs";
import { IoMdThumbsDown, IoMdThumbsUp } from "react-icons/io";
import { MdChat } from "react-icons/md";

const dummyPhoto = 'https://source.unsplash.com/random/?person'

function DetailMenu() {
    return (
        <div
            className="bg-relazee-dark-2 rounded-lg flex flex-col text-relazee-text-body-1"
            style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}
        >
            <button className="flex flex-row rounded-t-lg items-center gap-3 hover:bg-relazee-dark-3 px-4 py-2">
                <BsExclamationCircle />
                <span className='text-xxs'>Laporkan</span>
            </button>
            <button className="flex flex-row rounded-b-lg items-center gap-3 hover:bg-relazee-dark-3 px-4 py-2">
                <BsShareFill />
                <span className='text-xxs'>Bagikan</span>
            </button>
        </div >
    )
}

export default function MahasiswaFeedDetail() {
    const router = useRouter()
    const [showDetailMenu, setShowDetailMenu] = useState(false)
    const [commentInput, setCommentInput] = useState('')

    const detailMenuRef = useRef<HTMLDivElement>(null)

    const closeDetailMenu = (e: Event) => {
        if (detailMenuRef.current && showDetailMenu && !detailMenuRef.current.contains(e.target as Node)) {
            setShowDetailMenu(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', closeDetailMenu)
    })

    return (
        <div className="bg-relazee-dark-2 rounded-2xl flex flex-col">
            <div className="px-5 py-4 flex flex-row items-center gap-1">
                <button className="text-4xl" onClick={() => router.back()}><BsArrowLeftShort /></button>
                <h3 className="text-relazee-text-heading text-xl font-semibold">Postingan</h3>
            </div>
            {/* <hr className="block h-[1px] border-0 border-t-[1px] border-red-500" /> */}
            <div className="px-5 py-3 flex flex-col gap-4 border-0 border-y-2 border-relazee-dark-3">
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
                <p className='text-relazee-text-heading text-sm font-medium'>Tahun 2022 kemarin alhamdulillah aku dapet kesempatan jadi bagian dari tahap terakhir PKM yaitu Pekan Ilmiah Mahasiswa Nasional atau yang biasa kita kenal PIMNAS<br /><br />Well, dengan kesempatan itu aku pengen coba share pengalaman PKM dan PIMNAS</p>
                <p className='text-relazee-text-heading text-sm font-medium'>#PIMNAS</p>
                <div className='flex flex-row items-center gap-2 justify-between text-relazee-text-body-1 relative'>
                    <div className='flex flex-row items-center gap-2'>
                        <IoMdThumbsUp />
                        <span className='text-xxs'>1055</span>
                        •
                        <IoMdThumbsDown />
                        •
                        <Link href={`/feed/5`} className='flex flex-row items-center gap-2'>
                            <MdChat />
                            <span className='text-xxs'>10 Balasan</span>
                        </Link>
                    </div>
                    <button onClick={() => setShowDetailMenu(!showDetailMenu)}><BsThreeDots /></button>
                    {showDetailMenu && <div className="absolute bottom-[90%] right-0" ref={detailMenuRef}><DetailMenu /></div>}
                </div>
            </div>

            {/* Comment Input */}
            <div className={`flex flex-row gap-4 items-center p-5`}>
                <div className='bg-center bg-cover w-10 h-10 aspect-square rounded-full' style={{ backgroundImage: `url(${dummyPhoto})` }}></div>
                <div className='flex flex-col gap-2 w-full'>
                    <input
                        value={commentInput}
                        onChange={(e) => setCommentInput(e.target.value)}
                        type='text'
                        className="bg-relazee-dark-3 rounded-lg block w-full px-4 py-3 placeholder-relazee-text-placeholder text-sm text-relazee-text-heading"
                        placeholder="Let&apos;s share what&apos;s going on your mind..."
                    />
                </div>
                <button className='bg-relazee-orange text-white rounded-lg font-medium text-sm whitespace-nowrap px-4 py-3'>Create Post</button>
            </div>

            {/* Comment Section */}
            <div className="flex flex-col">
                <div className="flex flex-row gap-4 border-0 border-t-2 border-relazee-dark-3 px-5 py-5">
                    <div className='bg-center bg-cover w-8 h-8 aspect-square rounded-full' style={{ backgroundImage: `url(${dummyPhoto})` }}></div>
                    <div className="flex flex-col w-full -mt-2 gap-2">
                        <div className="flex flex-row justify-between">
                            <div className='flex flex-col'>
                                <h4 className='text-relazee-text-heading font-semibold'>Syah Reza Pahlevi</h4>
                                <span className='text-xs text-relazee-text-body-2'>Informatika</span>
                            </div>
                            <span className='text-xxs text-relazee-text-body-1'>2 hari yang lalu</span>
                        </div>
                        <p className='text-relazee-text-heading text-xs font-medium'>Tahun 2022 kemarin alhamdulillah aku dapet kesempatan jadi bagian dari tahap terakhir PKM yaitu Pekan Ilmiah</p>
                        <div className='flex flex-row items-center gap-2 text-relazee-text-body-1'>
                            <IoMdThumbsUp />
                            <span className='text-xxs'>1055</span>
                            •
                            <IoMdThumbsDown />
                            •
                            <Link href={`/feed/5`} className='flex flex-row items-center gap-2'>
                                <MdChat />
                                <span className='text-xxs'>10 Balasan</span>
                            </Link>
                        </div>

                        {/* Replies */}
                        <div className="flex flex-row gap-4 py-2">
                            <div className='bg-center bg-cover w-6 h-6 aspect-square rounded-full' style={{ backgroundImage: `url(${dummyPhoto})` }}></div>
                            <div className="flex flex-col w-full gap-2">
                                <div className="flex flex-row justify-between">
                                    <div className='flex flex-row items-center gap-2'>
                                        <h4 className='text-relazee-text-heading font-medium text-sm'>Syah Reza Pahlevi</h4>
                                        <span className="text-xs text-relazee-text-body-2">-</span>
                                        <span className='text-xs text-relazee-text-body-2'>Informatika</span>
                                    </div>
                                    <span className='text-xxs text-relazee-text-body-1'>2 hari yang lalu</span>
                                </div>
                                <p className='text-relazee-text-heading text-xs font-medium'>Mang eak?</p>
                                <div className='flex flex-row items-center gap-2 text-relazee-text-body-1'>
                                    <IoMdThumbsUp />
                                    <span className='text-xxs'>1055</span>
                                    •
                                    <IoMdThumbsDown />
                                    •
                                    <Link href={`/feed/5`} className='flex flex-row items-center gap-2'>
                                        <MdChat />
                                        <span className='text-xxs'>10 Balasan</span>
                                    </Link>
                                </div>
                                <div className="flex flex-row gap-4 py-2">
                                    <div className='bg-center bg-cover w-6 h-6 aspect-square rounded-full' style={{ backgroundImage: `url(${dummyPhoto})` }}></div>
                                    <div className="flex flex-col w-full gap-2">
                                        <div className="flex flex-row justify-between">
                                            <div className='flex flex-row items-center gap-2'>
                                                <h4 className='text-relazee-text-heading font-medium text-sm'>Syah Reza Pahlevi</h4>
                                                <span className="text-xs text-relazee-text-body-2">-</span>
                                                <span className='text-xs text-relazee-text-body-2'>Informatika</span>
                                            </div>
                                            <span className='text-xxs text-relazee-text-body-1'>2 hari yang lalu</span>
                                        </div>
                                        <p className='text-relazee-text-heading text-xs font-medium'>Mang eak?</p>
                                        <div className='flex flex-row items-center gap-2 text-relazee-text-body-1'>
                                            <IoMdThumbsUp />
                                            <span className='text-xxs'>1055</span>
                                            •
                                            <IoMdThumbsDown />
                                            •
                                            <Link href={`/feed/5`} className='flex flex-row items-center gap-2'>
                                                <MdChat />
                                                <span className='text-xxs'>10 Balasan</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-4 py-2">
                                    <div className='bg-center bg-cover w-6 h-6 aspect-square rounded-full' style={{ backgroundImage: `url(${dummyPhoto})` }}></div>
                                    <div className="flex flex-col w-full gap-2">
                                        <div className="flex flex-row justify-between">
                                            <div className='flex flex-row items-center gap-2'>
                                                <h4 className='text-relazee-text-heading font-medium text-sm'>Syah Reza Pahlevi</h4>
                                                <span className="text-xs text-relazee-text-body-2">-</span>
                                                <span className='text-xs text-relazee-text-body-2'>Informatika</span>
                                            </div>
                                            <span className='text-xxs text-relazee-text-body-1'>2 hari yang lalu</span>
                                        </div>
                                        <p className='text-relazee-text-heading text-xs font-medium'>Mang eak?</p>
                                        <div className='flex flex-row items-center gap-2 text-relazee-text-body-1'>
                                            <IoMdThumbsUp />
                                            <span className='text-xxs'>1055</span>
                                            •
                                            <IoMdThumbsDown />
                                            •
                                            <Link href={`/feed/5`} className='flex flex-row items-center gap-2'>
                                                <MdChat />
                                                <span className='text-xxs'>10 Balasan</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-4 border-0 border-t-2 border-relazee-dark-3 px-5 py-5"></div>
            </div>
        </div>
    )
}