'use client'

import MahasiswaTopbar from "@/app/_components/mahasiswa/molecules/topbar";
import Sticky from "react-stickynode";
import PopularTags from "@/app/_components/mahasiswa/molecules/popular-tags";

export default function MahasiswaPartnerLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <MahasiswaTopbar />
            <div className='flex flex-row items-start gap-5 pt-20 container mx-auto'>
                <Sticky enabled={true} top={80} className='w-2/12' bottomBoundary="#feed">
                    <div className='flex flex-col gap-5 pb-5'>
                        <PopularTags />
                    </div>
                </Sticky>
                <div className='w-10/12 flex flex-col gap-5 pb-5' id='feed'>
                    {children}
                </div>
                {/* <MahasiswaRightSidebar /> */}
            </div>
        </>
    )
}