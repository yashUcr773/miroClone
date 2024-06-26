"use client"

import Loading from "@/components/auth/AuthLoading"
import { ClerkProvider, useAuth } from "@clerk/nextjs"
import { AuthLoading, Authenticated, ConvexReactClient } from "convex/react"
import { ConvexProviderWithClerk } from "convex/react-clerk"

interface ConvexClientProviderProps {
    children: React.ReactNode
}

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;

const convex = new ConvexReactClient(convexUrl)

export default function ConvexClientProvider({ children }: ConvexClientProviderProps) {
    return (
        <ClerkProvider>
            <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
                <Authenticated>
                    {children}
                </Authenticated>
                <AuthLoading>
                    <Loading></Loading>
                </AuthLoading>
            </ConvexProviderWithClerk>
        </ClerkProvider>
    )
}