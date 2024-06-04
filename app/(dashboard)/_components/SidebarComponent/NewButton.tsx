"use client"

import { Cross, CrossIcon, CrosshairIcon, Plus } from "lucide-react"

import { CreateOrganization } from "@clerk/nextjs"
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import Hint from "@/components/HintToolTip"

export default function NewButton() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="aspect-square">
                    <Hint label="Create New Organization" side="right" sideOffset={18} align="start">
                        <button className="bg-white/25 h-full w-full rounded-md flex items-center justify-center p-2 opacity-60 hover:opacity-100 transition">
                            <Plus className="text-white"></Plus>
                        </button>
                    </Hint>
                </div>
            </DialogTrigger>
            <DialogContent className="p-0 bg-transparent border-none max-w-[480px] w-fit">
                <div className="relative flex items-center justify-center">
                    <DialogClose className="absolute   w-fit h-fit z-[60] top-3 right-3">
                        <Plus className="size-6 text-black rotate-45"></Plus>
                    </DialogClose>
                    <CreateOrganization routing="hash"></CreateOrganization>
                </div>
            </DialogContent>
        </Dialog>
    )
}