import { ThemeProvider } from './theme-provider'
import type { ReactNode } from 'react'
import AuthContextProvider from './auth-context-provider'

interface ProvidersProps {
    children: ReactNode
}

const Providers = ({ children }: ProvidersProps) => {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <AuthContextProvider>{children}</AuthContextProvider>
        </ThemeProvider>
    )
}

export default Providers
