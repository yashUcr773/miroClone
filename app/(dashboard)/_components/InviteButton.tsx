import { Plus } from "lucide-react";
import { OrganizationProfile } from "@clerk/nextjs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function InviteButton() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={'outline'}>
                    <Plus className="size-4 mr-2"></Plus> Invite Members
                </Button>
            </DialogTrigger>
            <DialogContent className="p-0 bg-transparent border-none max-w-[880px] mx-auto w-fit">
                <OrganizationProfile routing="hash"></OrganizationProfile>
            </DialogContent>
        </Dialog>
    )
}