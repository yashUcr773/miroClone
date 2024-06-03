import { Circle, MousePointer2, Pencil, Redo2, Square, StickyNote, Type, Undo2 } from "lucide-react";
import { CanvasMode, CanvasState, LayerType } from "@/types/canvas";
import ToolButton from "./ToolButton";

interface ToolbarProps {
    canvasState: CanvasState;
    setCanvasState: (newState: CanvasState) => void;
    undo: () => void;
    redo: () => void;
    canUndo: boolean;
    canRedo: boolean;
};

export default function Toolbar({ canvasState, setCanvasState, undo, redo, canUndo, canRedo }: ToolbarProps) {

    return (
        <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4">
            <div className="bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">
                <ToolButton label="Select" icon={MousePointer2}
                    isActive={canvasState.mode === CanvasMode.None || canvasState.mode === CanvasMode.Translating || canvasState.mode === CanvasMode.SelectionNet || canvasState.mode === CanvasMode.Pressing || canvasState.mode === CanvasMode.Resizing}
                    onClick={() => setCanvasState({ mode: CanvasMode.None })}></ToolButton>

                <ToolButton label="Text" icon={Type}
                    isActive={canvasState.mode === CanvasMode.Inserting && canvasState.layerType === LayerType.Text}
                    onClick={() => setCanvasState({ mode: CanvasMode.Inserting, layerType: LayerType.Text })}></ToolButton>

                <ToolButton label="Sticky note" icon={StickyNote}
                    onClick={() => setCanvasState({
                        mode: CanvasMode.Inserting,
                        layerType: LayerType.Note,
                    })}
                    isActive={canvasState.mode === CanvasMode.Inserting && canvasState.layerType === LayerType.Note}
                ></ToolButton>

                <ToolButton label="Rectangle" icon={Square}
                    onClick={() => setCanvasState({
                        mode: CanvasMode.Inserting,
                        layerType: LayerType.Rectangle,
                    })}
                    isActive={canvasState.mode === CanvasMode.Inserting && canvasState.layerType === LayerType.Rectangle}
                ></ToolButton>

                <ToolButton label="Ellipse" icon={Circle}
                    onClick={() => setCanvasState({
                        mode: CanvasMode.Inserting,
                        layerType: LayerType.Ellipse,
                    })}
                    isActive={canvasState.mode === CanvasMode.Inserting && canvasState.layerType === LayerType.Ellipse}
                ></ToolButton>

                <ToolButton label="Pen" icon={Pencil}
                    onClick={() => setCanvasState({
                        mode: CanvasMode.Pencil,
                    })}
                    isActive={canvasState.mode === CanvasMode.Pencil}
                ></ToolButton>
            </div>

            <div className="bg-white rounded-md p-1.5 flex flex-col items-center shadow-md">
                <ToolButton label="Undo" icon={Undo2} onClick={undo} isDisabled={!canUndo}></ToolButton>
                <ToolButton label="Redo" icon={Redo2} onClick={redo} isDisabled={!canRedo}></ToolButton>
            </div>
        </div>
    );
};

export const ToolbarSkeleton = () => {
    return (
        <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4 bg-white h-[360px] w-[52px] shadow-md rounded-md"></div>
    );
};
