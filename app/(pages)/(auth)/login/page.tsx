'use client'

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { FiEye, FiEyeOff } from "react-icons/fi"
import { HiOutlineLockClosed } from "react-icons/hi2"
import { MdMailOutline } from "react-icons/md"

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState('')
    const router = useRouter()

    const handleSignIn = async () => {
    }

    return (
        <>
            <h1 className='text-relazee-text-heading text-2xl font-medium mb-1'>Selamat Datang</h1>
            <p className="text-relazee-text-body-3 text-xs mb-5">Dapatkan manfaat yang luar biasa dari komunitas</p>
            <span className='text-red-500 mb-2'>{error}</span>
            <div className='flex flex-col gap-1 mb-4'>
                {/* <label htmlFor="" className='text-gray-500 font-medium'>Email atau Username</label> */}
                <div className="relative w-full">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none text-relazee-text-body-3">
                        <MdMailOutline />
                    </div>
                    {/* <button type='button' onClick={() => setChats([])} className="flex md:hidden absolute inset-y-0 left-0 items-center pl-5 cursor-pointer">
                                <i className="bi bi-trash-fill text-violet-700"></i>
                            </button> */}
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        id='email'
                        className="bg-relazee-dark-3 text-sm text-relazee-text-heading rounded-lg block w-full pl-10 pr-5 py-2.5 placeholder-relazee-text-body-3"
                        placeholder="Email"
                    />
                    {/* <button type='submit' className="flex absolute inset-y-0 right-0 items-center pr-5 cursor-pointer">
                                <i className="bi bi-send-fill text-violet-700"></i>
                            </button> */}
                </div>
            </div>
            <div className='flex flex-col gap-1 mb-2'>
                {/* <label htmlFor="" className='text-gray-500 font-medium'>Password</label> */}
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
            <a href="#" className='text-relazee-orange text-xs font-medium self-end mb-4'>Forgot password?</a>
            {/* <button onClick={() => navigate('/home')} className='bg-relazee-blue rounded-lg py-2 text-white'>Masuk</button> */}
            <button className='bg-relazee-orange rounded-lg py-2 text-white text-sm mb-5' onClick={handleSignIn}>Sign In</button>
            <span className='text-center text-relazee-text-body-3 text-xs'>Have no account yet? <Link href={'/register'} className='text-relazee-orange font-medium'>Create an Account</Link></span>
        </>
    )
}