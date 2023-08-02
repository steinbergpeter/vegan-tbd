'use client'

import React from 'react'
import { useSession } from 'next-auth/react'

const ClientSideUserGetter = () => {
    const session = useSession()
    const fill = JSON.stringify(session || "Can't access Session")
    return (
        <div>
            <h1 className="font-mono">{fill}</h1>
        </div>
    )
}

export default ClientSideUserGetter
