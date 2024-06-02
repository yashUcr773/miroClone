"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { OrganizationSwitcher } from "@clerk/nextjs"
import { LayoutDashboard, Star } from "lucide-react"
import { Poppins } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"


const font = Poppins({
    subsets: ["latin"],
    weight: ["600"]
})

export default function OrganizationSidebar() {

    const searchParams = useSearchParams()
    const favourites = searchParams.get('favourites')

    return (
        <div className="hidden lg:flex flex-col space-y-6 w-[206px] pl-5 pt-5">
            <Link href={'/'}>
                <div className="flex items-center gap-x-2">
                    <Image src='/logo.svg' alt='logo' height={44} width={44}></Image>
                    <span className={cn("font-semibold text-xl", font.className)}>MiroClone</span>
                </div>
            </Link>
            <OrganizationSwitcher hidePersonal appearance={{
                elements: {
                    rootBox: {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%'
                    },
                    organizationSwitcherTrigger: {
                        padding: '6px',
                        width: "100%",
                        borderRadius: '8px',
                        border: "1px solid #E5E7EB",
                        justifyContent: "space-between",
                        backgroundColor: 'white',
                        marginRight: '12px'
                    }
                }
            }}></OrganizationSwitcher>

            <div className="space-y-1 w-full">
                <Button asChild variant={favourites ? 'ghost' : 'secondary'} size='lg'
                    className="font-normal justify-start px-2 w-full">
                    <Link href={'/'}>
                        <LayoutDashboard className={cn("size-4 mr-2", favourites ? 'fill-white' : 'fill-black')}></LayoutDashboard>
                        Team Boards
                    </Link>
                </Button>

                <Button asChild variant={favourites ? 'secondary' : 'ghost'} size='lg'
                    className="font-normal justify-start px-2 w-full">
                    <Link href={{
                        pathname: '/',
                        query: { favourites: true }
                    }}>
                        <Star className={cn("size-4 mr-2", favourites ? 'fill-black' : 'fill-white')}></Star>
                        Favourite Boards
                    </Link>
                </Button>
            </div>
        </div>
    )
}
