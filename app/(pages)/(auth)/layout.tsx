'use client'

import { cookies } from 'next/headers'
import { redirect } from "next/navigation"
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

export default async function MahasiswaAuthLayout({ children }: { children: React.ReactNode }) {
    // const cookieStore = cookies()
    const session = 0
    if (session) {
        redirect('/home')
    }

    return (
        <div className="flex flex-row">
            <div className="w-1/2 min-h-screen bg-relazee-dark-2 flex flex-col justify-center relative">
                <Image
                    className="absolute top-14 left-14"
                    src={RelazeeLogoWithText}
                    alt='relazee logo'
                />
                <AuthCarousel>
                    <AuthCarouselItem />
                    <AuthCarouselItem />
                    <AuthCarouselItem />
                </AuthCarousel>
            </div>
            <div className="w-1/2 min-h-screen flex flex-col items-center justify-center">
                <div className='container mx-auto flex flex-col items-stretch justify-center w-1/2'>
                    {children}
                </div>
            </div>
        </div>
    )
}