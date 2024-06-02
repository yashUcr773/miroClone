"use client";

import Image from "next/image";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useOrganization } from "@clerk/nextjs";

import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import useApiMutation from "@/hooks/UseApiMutation";


export default function EmptyBoards() {

    const router = useRouter();
    const { organization } = useOrganization();
    const { mutate, pending } = useApiMutation(api.board.create);

    const onClick = () => {
        if (!organization) return;

        mutate({
            orgId: organization.id,
            title: "Untitled"
        }).then((id) => {
            toast.success("Board created");
            router.push(`/board/${id}`);
        }).catch(() => toast.error("Failed to create board"));
    };

    return (
        <div className="h-full flex flex-col items-center justify-center">
            <Image src="/Add_new_page.svg" height={110} width={110} alt="Empty"></Image>
            <h2 className="text-2xl font-semibold mt-6">
                Create your first board!
            </h2>
            <p className="text-muted-foreground textg-sm mt-2">
                Start by creating a board for your organization.
            </p>
            <div className="mt-6">
                <Button disabled={pending} onClick={onClick} size="lg">
                    Create board
                </Button>
            </div>
        </div>
    );
};