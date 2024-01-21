'use client'

import Link from "next/link"
import { useState } from "react"
import { BsThreeDotsVertical } from "react-icons/bs"

const dummyPhoto = 'https://source.unsplash.com/random/?person'

function PartnerCard({ mahasiswa }: any) {
    return (
        <Link href={`/profile/${mahasiswa.users.username}`} className="bg-relazee-dark-3 rounded-lg p-4 flex flex-col items-center gap-3">
            <div className="flex flex-row relative w-full justify-center">
                <div className="bg-center bg-cover w-20 aspect-square rounded-md" style={{ backgroundImage: `url(${mahasiswa.avatar_url})` }}></div>
                <button className="absolute right-0"><BsThreeDotsVertical /></button>
            </div>
            <div className="flex flex-col text-center">
                <h4 className="font-medium text-relazee-text-heading">{mahasiswa.fullname}</h4>
                <span className="text-sm text-relazee-text-body-2">{mahasiswa.fakultas.alias}</span>
            </div>
            <div className="flex flex-row items-center justify-center gap-1 flex-wrap">
                {mahasiswa.skills && mahasiswa.skills.map((skill: any, i: any) => (
                    <span key={i} className="bg-relazee-dark-2 text-relazee-text-body-2 text-xxs rounded-lg py-1 px-2">{skill}</span>
                ))}
            </div>
        </Link>
    )
}

export default function MahasiswaPartner() {
    const [partnerSearchInput, setPartnerSearchInput] = useState('')
    const mahasiswaData = [
        {
            id: 1,
            fullname: 'Nafis Handoko',
            avatar_url: dummyPhoto,
            users: {
                username: 'nafishandoko'
            },
            fakultas: {
                alias: 'Fasilkom'
            },
            skills: ['UIUX Design', 'Frontend Development', 'Karya Tulis']
        },
        {
            id: 1,
            fullname: 'Nafis Handoko',
            avatar_url: dummyPhoto,
            users: {
                username: 'nafishandoko'
            },
            fakultas: {
                alias: 'Fasilkom'
            },
            skills: ['UIUX Design', 'Frontend Development', 'Karya Tulis']
        },
        {
            id: 1,
            fullname: 'Nafis Handoko',
            avatar_url: dummyPhoto,
            users: {
                username: 'nafishandoko'
            },
            fakultas: {
                alias: 'Fasilkom'
            },
            skills: ['UIUX Design', 'Frontend Development', 'Karya Tulis']
        },
        {
            id: 1,
            fullname: 'Nafis Handoko',
            avatar_url: dummyPhoto,
            users: {
                username: 'nafishandoko'
            },
            fakultas: {
                alias: 'Fasilkom'
            },
            skills: ['UIUX Design', 'Frontend Development', 'Karya Tulis']
        },
        {
            id: 1,
            fullname: 'Nafis Handoko',
            avatar_url: dummyPhoto,
            users: {
                username: 'nafishandoko'
            },
            fakultas: {
                alias: 'Fasilkom'
            },
            skills: ['UIUX Design', 'Frontend Development', 'Karya Tulis']
        },
    ]

    return (
        <div className="bg-relazee-dark-2 rounded-2xl flex flex-col gap-4 p-4">
            <div className={`flex flex-row gap-4 items-center`}>
                <div className='flex flex-col gap-2 w-full'>
                    <input
                        value={partnerSearchInput}
                        onChange={(e) => setPartnerSearchInput(e.target.value)}
                        type='text'
                        className="bg-relazee-dark-3 rounded-lg block w-full px-4 py-3 placeholder-relazee-text-placeholder text-sm text-relazee-text-heading"
                        placeholder="Cari skill, nama, dkk"
                    />
                </div>
                <button className='bg-relazee-orange text-white rounded-lg font-medium text-sm whitespace-nowrap px-4 py-3'>Cari</button>
            </div>
            <div className="grid grid-cols-4 gap-3">
                {mahasiswaData && mahasiswaData.map((mahasiswa: any, index: any) => (
                    <PartnerCard mahasiswa={mahasiswa} key={mahasiswa.id} index={index} />
                ))}
            </div>
        </div>
    )
}