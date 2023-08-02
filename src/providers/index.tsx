import type { ReactNode } from 'react'
import AuthContextProvider from './auth-context-provider'
import dynamic from 'next/dynamic'
interface ProvidersProps {
    children: ReactNode
}

const ThemeProvider = dynamic(() => import('./theme-provider'), {
    ssr: false,
})

const Providers = ({ children }: ProvidersProps) => {
    return (
        <AuthContextProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                {children}
            </ThemeProvider>
        </AuthContextProvider>
    )
}

export default Providers
