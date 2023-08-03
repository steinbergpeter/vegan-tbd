'use client'

import React from 'react'
import { signOut, useSession } from 'next-auth/react'

const ClientSideUserGetter = () => {
    const session = useSession()
    const fill = JSON.stringify(session || "Can't access Session")
    return (
        <div>
            <h1 className="font-mono">{fill}</h1>
            <button
                className="px-4 py-2 text-white mt-4 rounded-xl bg-green-700 hover:bg-green-400"
                type="button"
                onClick={() => signOut()}
            >
                Sign Out
            </button>
        </div>
    )
}

export default ClientSideUserGetter
