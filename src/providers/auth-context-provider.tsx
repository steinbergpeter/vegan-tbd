'use client'

import { SessionProvider } from 'next-auth/react'
import { type ReactNode } from 'react'

interface AuthContextProviderProps {
    children: ReactNode
}
export default function AuthContextProvider({
    children,
}: AuthContextProviderProps) {
    return <SessionProvider>{children}</SessionProvider>
}
