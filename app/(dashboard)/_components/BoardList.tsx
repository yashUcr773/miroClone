"use client";

import { useQuery } from "convex/react";

import { api } from "@/convex/_generated/api";

import BoardCard from "./BoardCardComponent/BoardCard";
import EmptyBoards from "./EmptyStates/EmptyBoards";
import EmptyFavourites from "./EmptyStates/EmptyFavourites";
import EmptySearch from "./EmptyStates/EmptySearch";
import NewBoardButton from "./NewBoardButton";


interface BoardListProps {
    orgId: string;
    query: {
        search?: string;
        favourites?: string;
    };
};

export default function BoardList({ orgId, query }: BoardListProps) {

    const data = useQuery(api.boards.get, {
        orgId,
        ...query,
    });

    if (data === undefined) {
        return (
            <div>
                <h2 className="text-3xl">
                    {query.favourites ? "Favorite boards" : "Team boards"}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
                    <NewBoardButton orgId={orgId} disabled></NewBoardButton>
                    <BoardCard.Skeleton></BoardCard.Skeleton>
                    <BoardCard.Skeleton></BoardCard.Skeleton>
                    <BoardCard.Skeleton></BoardCard.Skeleton>
                    <BoardCard.Skeleton></BoardCard.Skeleton>
                    <BoardCard.Skeleton></BoardCard.Skeleton>
                </div>
            </div>
        )
    }

    if (!data?.length && query.search) {
        return <EmptySearch></EmptySearch>
    }

    if (!data?.length && query.favourites) {
        return <EmptyFavourites></EmptyFavourites>
    }

    if (!data?.length) {
        return <EmptyBoards></EmptyBoards>
    }

    return (
        <div>
            <h2 className="text-3xl">
                {query.favourites ? "Favorite boards" : "Team boards"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
                <NewBoardButton orgId={orgId}></NewBoardButton>
                {
                    data?.map((board) => (
                        <BoardCard key={board._id} id={board._id} title={board.title} imageUrl={board.imageUrl} authorId={board.authorId} authorName={board.authorName} createdAt={board._creationTime} orgId={board.orgId} isFavorite={board.isFavorite}></BoardCard>
                    ))
                }
            </div>
        </div>
    );
};