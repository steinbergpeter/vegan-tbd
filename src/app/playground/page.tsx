import React from 'react'
import '@/styles/globals.css'

const PlaygroundPage = () => {
    return (
        <div>
            <div className="mt-20 flex gap-2 p-6 text-sm h-full flex-wrap bg-green-900">
                <div className="bg-border w-1/4 text-black text-center text-lg font-semibold h-16">
                    --border
                </div>
                <div className="bg-input w-1/4 text-black text-center text-lg font-semibold h-16">
                    --input
                </div>
                <div className="bg-ring w-1/4 text-black text-center text-lg font-semibold h-16">
                    --ring
                </div>

                <div className="bg-background w-1/4 h-16 flex items-center justify-center">
                    <div className="text-foreground text-center text-lg font-semibold">
                        Default
                    </div>
                </div>

                <div className="bg-primary w-1/4 h-16 flex items-center justify-center">
                    <div className="text-primary-foreground text-center text-lg font-semibold ">
                        Primary
                    </div>
                </div>

                <div className="bg-secondary w-1/4 h-16 flex items-center justify-center">
                    <div className="text-secondary-foreground text-center text-lg font-semibold ">
                        Secondary
                    </div>
                </div>

                <div className="bg-destructive w-1/4 h-16 flex items-center justify-center">
                    <div className="text-destructive-foreground text-center text-lg font-semibold ">
                        Destructive
                    </div>
                </div>

                <div className="bg-muted w-1/4 h-16 flex items-center justify-center">
                    <div className="text-muted-foreground text-center text-lg font-semibold ">
                        Muted
                    </div>
                </div>

                <div className="bg-accent w-1/4 h-16 flex items-center justify-center">
                    <div className="text-accent-foreground text-center text-lg font-semibold ">
                        Accent
                    </div>
                </div>

                <div className="bg-popover w-1/4 h-16 flex items-center justify-center">
                    <div className="text-popover-foreground text-center text-lg font-semibold ">
                        Popover
                    </div>
                </div>

                <div className="bg-card w-1/4 h-16 flex items-center justify-center">
                    <div className="text-card-foreground text-center text-lg font-semibold ">
                        Card
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlaygroundPage

/*


       
                */
