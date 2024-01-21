'use client'

import Sticky from "react-stickynode";
import FeedFilter from "@/app/_components/mahasiswa/molecules/feed-filter";
import PopularTags from "@/app/_components/mahasiswa/molecules/popular-tags";
import Feedback from "@/app/_components/mahasiswa/molecules/feedback";

export default function MahasiswaLeftSidebar() {
    return (
        <Sticky enabled={true} top={80} className='w-2/12' bottomBoundary="#feed">
            <div className='flex flex-col gap-5 pb-5'>
                <FeedFilter />
                <PopularTags />
                <Feedback />
            </div>
        </Sticky>
    )
}