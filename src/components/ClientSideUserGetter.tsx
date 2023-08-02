'use client'

import React from 'react'
import { useSession } from 'next-auth/react'

const ClientSideUserGetter = () => {
    const { data: session } = useSession()
    const fill = JSON.stringify(session || "Can't access Session")
    return (
        <div>
            <h1>{fill}</h1>
        </div>
    )
}

export default ClientSideUserGetter
