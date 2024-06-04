"use client"

import Hint from "@/components/HintToolTip"
import { cn } from "@/lib/utils"
import { useOrganization, useOrganizationList } from "@clerk/nextjs"
import Image from "next/image"

interface ItemProps {
    id: string
    name: string
    imageUrl: string
}

export default function Item({ id, imageUrl, name }: ItemProps) {

    const { organization } = useOrganization()
    const { setActive } = useOrganizationList()

    const isActive = organization?.id === id

    const onClick = () => {
        if (!setActive) return

        setActive({ organization: id })
    }

    return (
        <div className="relative">
            <Hint label={name} side="right" align="start" sideOffset={18}>
                <Image width={64} height={64} alt={name} src={imageUrl} onClick={onClick}
                    className={cn('rounded-md cursor-pointer opacity-75 hover:opacity-100 transition', isActive && 'opacity-100')}></Image>
            </Hint>
        </div>
    )
}