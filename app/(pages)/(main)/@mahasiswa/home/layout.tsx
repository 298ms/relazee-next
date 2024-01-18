import MahasiswaLeftSidebar from "@/app/_components/mahasiswa/organisms/left-sidebar";
import MahasiswaRightSidebar from "@/app/_components/mahasiswa/organisms/right-sidebar";
import MahasiswaTopbar from "@/app/_components/mahasiswa/molecules/topbar";

export default function MahasiswaHomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <MahasiswaTopbar />
            <div className='flex flex-row items-start gap-5 pt-20 container mx-auto'>
                <MahasiswaLeftSidebar />
                <div className='w-7/12 flex flex-col gap-5 pb-5' id='feed'>
                    {children}
                </div>
                <MahasiswaRightSidebar />
            </div>
        </>
    )
}