"use client";

import { toast } from "sonner";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import { useProModal } from "@/store/useProModal";
import { cn } from "@/lib/utils";
import useApiMutation from "@/hooks/UseApiMutation";


interface NewBoardButtonProps {
    orgId: string;
    disabled?: boolean;
};

export default function NewBoardButton({ orgId, disabled, }: NewBoardButtonProps) {
    const router = useRouter();
    const { onOpen } = useProModal();
    const { mutate, pending } = useApiMutation(api.board.create);


    const onClick = () => {
        mutate(
            {
                orgId,
                title: "Untitled"
            })
            .then((id) => {
                toast.success("Board created");
                router.push(`/board/${id}`);
            })
            .catch(() => {
                toast.error("Failed to create board");
                onOpen();
            });
    }

    return (
        <button disabled={pending || disabled} onClick={onClick}
            className={cn("col-span-1 aspect-[100/127] bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center py-6", (pending || disabled) && "opacity-75 hover:bg-blue-600 cursor-not-allowed")}>
            <Plus className="h-12 w-12 text-white stroke-1"></Plus>
            <p className="text-sm text-white font-light">
                New board
            </p>
        </button>
    );
};