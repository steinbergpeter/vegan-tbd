import type { ReactNode } from 'react'
import AuthContextProvider from './auth-context-provider'
import { Toaster } from '@/components/ui/toaster'
import dynamic from 'next/dynamic'
const ThemeProvider = dynamic(() => import('./theme-provider'), {
    ssr: false,
})

interface ProvidersProps {
    children: ReactNode
}

const Providers = ({ children }: ProvidersProps) => {
    return (
        <AuthContextProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                {children}
                <Toaster />
            </ThemeProvider>
        </AuthContextProvider>
    )
}

export default Providers
