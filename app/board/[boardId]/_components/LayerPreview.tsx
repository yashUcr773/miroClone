"use client";

import { memo } from "react";
import { colorToCss } from "@/lib/utils";
import { useStorage } from "@/liveblocks.config";
import Ellipse from "./Ellipse";
import { LayerType } from "@/types/canvas";
import Rectangle from "./Rectangle";
import Text from "./Text";
import Note from "./Note";
import Path from "./Path";

interface LayerPreviewProps {
    id: string;
    onLayerPointerDown: (e: React.PointerEvent, layerId: string) => void;
    selectionColor?: string;
};

export const LayerPreview = memo(({ id, onLayerPointerDown, selectionColor}: LayerPreviewProps) => {
    const layer = useStorage((root) => root.layers.get(id));

    if (!layer) {
        return null;
    }

    switch (layer.type) {

        case LayerType.Path:
            return (
                <Path key={id} points={layer.points} onPointerDown={(e) => onLayerPointerDown(e, id)} x={layer.x} y={layer.y} fill={layer.fill ? colorToCss(layer.fill) : "#000"} stroke={selectionColor}></Path>
            )
        case LayerType.Note:
            return (
                <Note id={id} layer={layer} onPointerDown={onLayerPointerDown} selectionColor={selectionColor}></Note>
            );
        case LayerType.Text:
            return (
                <Text id={id} layer={layer} onPointerDown={onLayerPointerDown} selectionColor={selectionColor}></Text>
            );
        case LayerType.Ellipse:
            return (
                <Ellipse id={id} layer={layer} onPointerDown={onLayerPointerDown} selectionColor={selectionColor}></Ellipse>
            );
        case LayerType.Rectangle:
            return (
                <Rectangle id={id} layer={layer} onPointerDown={onLayerPointerDown} selectionColor={selectionColor}></Rectangle>
            );
        default:
            console.warn("Unknown layer type");
            return null;
    }
});

LayerPreview.displayName = "LayerPreview";

