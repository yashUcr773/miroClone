import OrganizationSidebar from "./_components/OrganizationSidebar"
import Navbar from "./_components/Navbar"
import Sidebar from "./_components/SidebarComponent/Sidebar"

interface DashboardLayoutProps {
    children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <main className="h-full">
            <Sidebar></Sidebar>
            <div className="pl-[60px] h-full">
                <div className="flex gap-x-3 h-full">
                    <OrganizationSidebar></OrganizationSidebar>
                    <div className="h-full flex-1">
                        <Navbar></Navbar>
                        {children}
                    </div>
                </div>
            </div>
        </main>
    )
}