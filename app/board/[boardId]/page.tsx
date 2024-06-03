
import Room from "@/components/Room";
import { Canvas } from "./_components/Canvas";
import Loading from "./_components/Loading";

interface BoardIdPageProps {
    params: {
        boardId: string;
    };
};

export default function BoardIdPage({ params}: BoardIdPageProps) {
    return (
        <Room roomId={params.boardId} fallback={<Loading></Loading>}>
            <Canvas boardId={params.boardId}></Canvas>
        </Room>
    );
};