"use client";

import { useOrganization } from "@clerk/nextjs";
import EmptyOrg from "./_components/EmptyStates/EmptyOrg";
import BoardList from "./_components/BoardList";

interface DashboardPageProps {
    searchParams: {
        search?: string;
        favourites?: string;
    };
};

export default function DashboardPage({ searchParams }: DashboardPageProps) {
    const { organization } = useOrganization();

    return (
        <div className="flex-1 h-[calc(100%-80px)] p-6">
            {!organization ? (
                <EmptyOrg></EmptyOrg>
            ) : (
                <BoardList orgId={organization.id} query={searchParams}></BoardList>
            )}
        </div>
    )
};
