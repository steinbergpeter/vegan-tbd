'use client'

import React from 'react'
import { signOut, useSession } from 'next-auth/react'
import { useToast } from './ui/use-toast'

const ClientSideUserGetter = () => {
    const session = useSession()
    const { toast } = useToast()
    const fill = JSON.stringify(session || "Can't access Session")
    return (
        <div>
            <h1 className="font-mono">{fill}</h1>
            <div className="flex gap-6">
                <button
                    className="px-4 py-2 text-white mt-4 rounded-xl bg-green-700 hover:bg-green-400"
                    type="button"
                    onClick={() => signOut()}
                >
                    Sign Out
                </button>
                <button
                    className="px-4 py-2 text-white mt-4 rounded-xl bg-purple-700 hover:bg-green-400"
                    type="button"
                    onClick={() =>
                        toast({
                            title: 'Success!',
                            description: `You have registered ${
                                session.data?.user?.name || 'no name'
                            }`,
                        })
                    }
                >
                    Toast
                </button>
            </div>
        </div>
    )
}

export default ClientSideUserGetter
