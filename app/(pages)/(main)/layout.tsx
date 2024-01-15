import { cookies } from 'next/headers'
import { redirect } from "next/navigation"

export default async function RoleLayout({ mahasiswa, dosen, organisasi, admin }: {
    mahasiswa: React.ReactNode,
    dosen: React.ReactNode,
    organisasi: React.ReactNode,
    admin: React.ReactNode
}) {
    const session = 1
    if (!session) {
        redirect('/login')
    }
    const userRole = 'mahasiswa'
    const renderedPage =
        userRole == 'mahasiswa' ? mahasiswa :
            userRole == 'dosen' ? dosen :
                userRole == 'organisasi' ? organisasi :
                    userRole == 'admin' ? admin : mahasiswa
    return (
        <>{renderedPage}</>
    )
}