'use client'

import React from 'react'
import { useSession } from 'next-auth/react'

const ClientSideUserGetter = () => {
    const { data: session } = useSession()
    return (
        <div>
            <pre>{JSON.stringify(session || "Can't access Session")}</pre>
        </div>
    )
}

export default ClientSideUserGetter
