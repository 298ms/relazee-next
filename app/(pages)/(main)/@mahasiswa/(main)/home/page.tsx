'use client'

import { useState } from 'react';
import { MdChat } from 'react-icons/md';
import { IoMdThumbsDown, IoMdThumbsUp } from "react-icons/io";

const dummyPhoto = 'https://source.unsplash.com/random/?person'

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
    const [isAnon, setIsAnon] = useState(false)
    const handleAnon = () => {
        setIsAnon(!isAnon);
    };

    const [post, setPost] = useState('')
    const [hashtag, setHashtag] = useState('')

    return (
        <>
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
        </>
    )
}