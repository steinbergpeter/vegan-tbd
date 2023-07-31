import { getAuthSession } from '@/libs/auth'
import ClientSideUserGetter from '@/components/ClientSideUserGetter'

export default async function HomePage() {
    const session = await getAuthSession()
    return (
        <div className="mx-auto max-w-xl mt-32">
            <div className="w-full">
                <h1 className="text-5xl mb-8">HOME PAGE</h1>
                <h2>Server Side Rendered</h2>
                <pre>{JSON.stringify(session)}</pre>
                <br />
                <h2>Client Side Rendered</h2>
                <ClientSideUserGetter />
            </div>
        </div>
    )
}
