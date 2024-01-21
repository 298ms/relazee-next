'use client'

import Sticky from "react-stickynode";
import Events from "@/app/_components/mahasiswa/molecules/events";
import GetToKnow from "@/app/_components/mahasiswa/molecules/get-to-know";
import Donation from "@/app/_components/mahasiswa/molecules/donation";

export default function MahasiswaRightSidebar() {
    return (
        <Sticky enabled={true} top={80} className='w-3/12' bottomBoundary="#feed">
            <div className='flex flex-col gap-5 pb-5'>
                <Events />
                <GetToKnow />
                <Donation />
            </div>
        </Sticky>
    )
}