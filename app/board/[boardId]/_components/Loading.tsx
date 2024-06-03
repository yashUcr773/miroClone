import { Loader } from "lucide-react";
import { InfoSkeleton } from "./Info";
import { ToolbarSkeleton } from "./Toolbar";
import { ParticipantsSkeleton } from "./Participants";

export default function Loading() {
    return (
        <main
            className="h-full w-full relative bg-neutral-100 touch-none flex items-center justify-center">
            <Loader className="h-6 w-6 text-muted-foreground animate-spin"></Loader>
            <InfoSkeleton></InfoSkeleton>
            <ParticipantsSkeleton></ParticipantsSkeleton>
            <ToolbarSkeleton></ToolbarSkeleton>
        </main>
    );
};
