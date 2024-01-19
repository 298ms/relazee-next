'use client'

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { FiEye, FiEyeOff } from "react-icons/fi"
import { HiOutlineLockClosed } from "react-icons/hi2"
import { MdMailOutline } from "react-icons/md"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import RelazeeLogoWithText from '@/public/assets/relazee-logo-with-text.png'
import Image from "next/image"
import AuthCarouselImg1 from '@/public/assets/auth-carousel/1.png'

const AuthCarouselItem = () => {
    return (
        <div className="flex flex-col items-center -mt-10">
            <Image
                src={AuthCarouselImg1}
                alt=""
            />
            <div className="flex flex-col items-center text-center gap-1 -mt-10">
                <h1 className="text-white text-2xl font-semibold">Welcome aboard my friend</h1>
                <p className="text-white text-sm">just a couple of clicks and we start</p>
            </div>
        </div>
    )
}

const CustomDot = ({ onClick, ...rest }: any) => {
    const {
        onMove,
        index,
        active,
        carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    return (
        <button
            className={`w-3 aspect-square rounded-full border border-relazee-orange ${active ? "bg-relazee-orange" : ""}`}
            onClick={() => onClick()}
        >
            {/* {React.Children.toArray(carouselItems)[index]} */}
            {/* {carouselItems[index]} */}
            {/* {index+1} */}
        </button>
    );
};


const AuthCarousel = ({ children }: any) => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <Carousel
            swipeable={true}
            arrows={false}
            draggable={true}
            showDots={true}
            customDot={<CustomDot />}
            dotListClass={`space-x-3`}
            containerClass={`pb-16`}
            responsive={responsive}
            ssr={false} // means to render carousel on server-side.
            // infinite={true}
            rewind={true}
            autoPlay={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            // customTransition="all .5"
            transitionDuration={500}
        // containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        // dotListClass="custom-dot-list-style"
        // itemClass="carousel-item-padding-40-px"
        >
            {children}
        </Carousel>
    )
}


export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState('')
    const router = useRouter()

    const handleSignIn = async () => {
    }

    return (
        <div className="flex flex-row">
            <div className="w-1/2 min-h-screen bg-relazee-dark-2 flex flex-col justify-center">
                {/* <Image
                    src={RelazeeLogoWithText}
                    alt='relazee logo'
                /> */}
                <AuthCarousel>
                    <AuthCarouselItem />
                    <AuthCarouselItem />
                    <AuthCarouselItem />
                </AuthCarousel>
            </div>
            <div className="w-1/2 min-h-screen flex flex-col items-center justify-center">
                <div className='container mx-auto flex flex-col items-stretch justify-center w-1/2'>
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
                                {/* <i className={`bi ${showPassword ? 'bi-eye-fill' : 'bi-eye-slash-fill'} text-gray-500`}></i> */}
                                <div className='text-relazee-text-body-3'>{showPassword ? <FiEye /> : <FiEyeOff />}</div>
                            </button>
                        </div>
                    </div>
                    <a href="#" className='text-relazee-orange text-xs font-medium self-end mb-4'>Forgot password?</a>
                    {/* <button onClick={() => navigate('/home')} className='bg-relazee-blue rounded-lg py-2 text-white'>Masuk</button> */}
                    <button className='bg-relazee-orange rounded-lg py-2 text-white text-sm mb-5' onClick={handleSignIn}>Sign In</button>
                    <span className='text-center text-relazee-text-body-3 text-xs'>Have no account yet? <Link href={'/register'} className='text-relazee-orange font-medium'>Create an Account</Link></span>
                </div>
            </div>
        </div>
    )
}