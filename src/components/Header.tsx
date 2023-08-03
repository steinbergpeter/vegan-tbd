import React from 'react'
import { ModeButton } from '@/components/ModeButton'
import Link from 'next/link'

const Header = () => {
    return (
        <header className="fixed top-0 w-full mx-auto bg-blue-400">
            <div className="max-w-4xl w-3/4 mx-auto px-2 py-4 flex justify-between items-center">
                <Link href={'/'} className="italic text-xl font-bold">
                    veganTBD
                </Link>
                <nav className="w-1/4">
                    <ul className="flex space-x-4 justify-between">
                        <li>
                            <Link href="/register" className="text-white">
                                Register
                            </Link>
                        </li>
                        <li>
                            <Link href="/sign-in" className="text-white">
                                Sign In
                            </Link>
                        </li>
                    </ul>
                </nav>
                <ModeButton />
            </div>
        </header>
    )
}

export default Header
