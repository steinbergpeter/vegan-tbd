import { ThemeProvider } from '@/providers/theme-provider'
import type { ReactNode } from 'react'
import { ClerkProvider } from '@clerk/nextjs'

interface ProvidersProps {
    children: ReactNode
}

const Providers = ({ children }: ProvidersProps) => {
    return (
        <ClerkProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                {children}
            </ThemeProvider>
        </ClerkProvider>
    )
}

export default Providers
