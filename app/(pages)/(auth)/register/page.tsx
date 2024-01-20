'use client'

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { FiEye, FiEyeOff } from "react-icons/fi"
import { HiOutlineLockClosed } from "react-icons/hi2"
import { MdMailOutline } from "react-icons/md"

export default function Register() {
    const [fullname, setFullname] = useState('')
    const [fakultas, setFakultas] = useState('')
    const [prodi, setProdi] = useState('')
    const [angkatan, setAngkatan] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [error, setError] = useState('')
    const router = useRouter()

    const handleSignIn = async () => {
    }

    return (
        <>
            <h1 className='text-relazee-text-heading text-2xl font-medium mb-1'>Selamat Datang</h1>
            <p className="text-relazee-text-body-3 text-xs mb-5">Daftarlah sekarang dan rasakan manfaatnya!</p>
            <span className='text-red-500 mb-2'>{error}</span>
            <div className='flex flex-col gap-1 mb-4'>
                <div className="relative w-full">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none text-relazee-text-body-3">
                        <MdMailOutline />
                    </div>
                    <input
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                        type="fullname"
                        id='fullname'
                        className="bg-relazee-dark-3 text-sm text-relazee-text-heading rounded-lg block w-full pl-10 pr-5 py-2.5 placeholder-relazee-text-body-3"
                        placeholder="Nama Lengkap"
                    />
                </div>
            </div>
            <div className='flex flex-col gap-1 mb-4'>
                <div className="relative w-full">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none text-relazee-text-body-3">
                        <MdMailOutline />
                    </div>
                    <select id="style" defaultValue={0} value={fakultas} onChange={(e) => setFakultas(e.target.value)} className="bg-relazee-dark-3 text-sm text-relazee-text-heading rounded-lg block w-full pl-10 pr-5 py-2.5 placeholder-relazee-text-body-3">
                        <option value={0}>Fakultas</option>
                        <option value={1}>Fasilkom</option>
                        <option value={2}>Faperta</option>
                        <option value={3}>FEB</option>
                    </select>
                </div>
            </div>
            <div className="flex flex-row gap-4 mb-4">
                <div className="relative w-4/6">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none text-relazee-text-body-3">
                        <MdMailOutline />
                    </div>
                    <select id="style" defaultValue={0} value={prodi} onChange={(e) => setProdi(e.target.value)} className="bg-relazee-dark-3 text-sm text-relazee-text-heading rounded-lg block w-full pl-10 pr-5 py-2.5 placeholder-relazee-text-body-3">
                        <option value={0}>Program Studi</option>
                        <option value={1}>Fasilkom</option>
                        <option value={2}>Faperta</option>
                        <option value={3}>FEB</option>
                    </select>
                </div>
                <div className="relative w-2/6">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none text-relazee-text-body-3">
                        <MdMailOutline />
                    </div>
                    <input
                        value={angkatan}
                        onChange={(e) => setAngkatan(e.target.value)}
                        type="number"
                        id="angkatan"
                        className="bg-relazee-dark-3 text-sm text-relazee-text-heading rounded-lg block w-full pl-10 pr-5 py-2.5 placeholder-relazee-text-body-3"
                        placeholder="Tahun"
                    />
                </div>
            </div>
            <div className='flex flex-col gap-1 mb-4'>
                <div className="relative w-full">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none text-relazee-text-body-3">
                        <MdMailOutline />
                    </div>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        id='email'
                        className="bg-relazee-dark-3 text-sm text-relazee-text-heading rounded-lg block w-full pl-10 pr-5 py-2.5 placeholder-relazee-text-body-3"
                        placeholder="Email Universitas"
                    />
                </div>
            </div>
            <div className='flex flex-col gap-1 mb-4'>
                <div className="relative w-full">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none text-relazee-text-body-3">
                        <HiOutlineLockClosed />
                    </div>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        className="bg-relazee-dark-3 text-sm text-relazee-text-heading rounded-lg block w-full pl-10 pr-5 py-2.5 placeholder-relazee-text-body-3"
                        placeholder="Password"
                    />
                    <button
                        onClick={() => setShowPassword(!showPassword)}
                        className="flex absolute inset-y-0 right-0 items-center pr-5"
                    >
                        <div className='text-relazee-text-body-3'>{showPassword ? <FiEye /> : <FiEyeOff />}</div>
                    </button>
                </div>
            </div>
            <div className='flex flex-col gap-1 mb-2'>
                <div className="relative w-full">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none text-relazee-text-body-3">
                        <HiOutlineLockClosed />
                    </div>
                    <input
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        type={showConfirmPassword ? 'text' : 'password'}
                        id="password"
                        className="bg-relazee-dark-3 text-sm text-relazee-text-heading rounded-lg block w-full pl-10 pr-5 py-2.5 placeholder-relazee-text-body-3"
                        placeholder="Confirm Password"
                    />
                    <button
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="flex absolute inset-y-0 right-0 items-center pr-5"
                    >
                        <div className='text-relazee-text-body-3'>{showConfirmPassword ? <FiEye /> : <FiEyeOff />}</div>
                    </button>
                </div>
            </div>
            <a href="#" className='text-relazee-orange text-xs font-medium self-end mb-4'>Forgot password?</a>
            {/* <button onClick={() => navigate('/home')} className='bg-relazee-blue rounded-lg py-2 text-white'>Masuk</button> */}
            <button className='bg-relazee-orange rounded-lg py-2 text-white text-sm mb-5' onClick={handleSignIn}>Sign Up</button>
            <span className='text-center text-relazee-text-body-3 text-xs'>Already have an account? <Link href={'/login'} className='text-relazee-orange font-medium'>Sign In</Link></span>
        </>
    )
}