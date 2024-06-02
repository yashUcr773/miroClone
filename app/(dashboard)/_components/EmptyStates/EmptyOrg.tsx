import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CreateOrganization } from "@clerk/nextjs";

export default function EmptyOrg() {
    return (
        <div className="h-full flex flex-col items-center justify-center">
            <Image src="/empty_org_state.svg" alt="Empty" height={200} width={200}></Image>
            <h2 className="text-2xl font-semibold mt-6">
                Welcome to MiroClone
            </h2>
            <p className="text-muted-foreground text-sm mt-2">
                Create an organization to get started
            </p>
            <div className="mt-6">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button size="lg">
                            Create organization
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
                        <CreateOrganization routing="hash"></CreateOrganization>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}