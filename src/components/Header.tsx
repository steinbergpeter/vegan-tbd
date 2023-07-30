import React from 'react'
import { ModeButton } from '@/components/ModeButton'

const Header = () => {
    return (
        <header className="fixed top-0 w-full mx-auto bg-blue-400">
            <div className="max-w-4xl w-3/4 mx-auto px-2 py-4 flex justify-between items-center">
                <p className="italic text-xl font-bold">veganTBD</p>
                <ModeButton />
            </div>
        </header>
    )
}

export default Header
