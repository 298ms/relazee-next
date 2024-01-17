import MahasiswaLeftSidebar from "@/app/_components/mahasiswa/molecules/left-sidebar";
import MahasiswaRightSidebar from "@/app/_components/mahasiswa/molecules/right-sidebar";
import MahasiswaTopbar from "@/app/_components/mahasiswa/molecules/topbar";

export default function MahasiswaLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <MahasiswaTopbar />
            <div className='flex flex-row items-start gap-5 pt-24 pb-10 container mx-auto'>
                <MahasiswaLeftSidebar />
                <div className='w-7/12 flex flex-col gap-5' id='feed'>
                    {children}
                </div>
                <MahasiswaRightSidebar />
            </div>
        </>
    )
}