'use client'

import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { useEffect } from 'react'

export function ModeButton() {
    const { theme, setTheme, systemTheme } = useTheme()

    useEffect(() => {
        setTheme(systemTheme || theme || 'dark')
    }, [])

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            disabled={theme === ''}
        >
            <SunIcon className="h-5 w-5 scale-100 dark:scale-0" />
            <MoonIcon className="absolute h-5 w-5 scale-0 dark:scale-100" />
        </Button>
    )
}
