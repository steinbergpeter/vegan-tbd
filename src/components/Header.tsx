import React from 'react'
import { ModeButton } from '@/components/ModeButton'
import { UserButton } from '@clerk/nextjs'

const Header = () => {
    return (
        <header className="fixed w-full mx-auto">
            <div className="max-w-4xl w-3/4 mx-auto px-2 py-4 flex justify-between items-center">
                <p className="italic text-xl font-bold">veganTBD</p>
                <UserButton afterSignOutUrl="/" />
                <ModeButton />
            </div>
        </header>
    )
}

export default Header
