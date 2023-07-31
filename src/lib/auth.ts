import { db } from '@/lib/db'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import {
    // type Awaitable,
    getServerSession,
    type RequestInternal,
    type User,
    type NextAuthOptions,
} from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
// import EmailProvider from "next-auth/providers/email";

// type Authorize = (
//     credentials: Record<'email' | 'username' | 'password', string> | undefined,
//     req: Pick<RequestInternal, 'query' | 'headers' | 'body' | 'method'>
// ) => Promise<User | null>

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                username: {
                    label: 'Username',
                    type: 'text',
                    placeholder: 'jsmith',
                },
                email: {
                    label: 'Email',
                    type: 'text',
                    placeholder: 'jsmith@email.com',
                },
                password: {
                    label: 'Password',
                    type: 'password',
                },
            },
            authorize: async (credentials) => {
                return {
                    id: '1',
                    name: 'J Smith',
                    email: 'brett@gmail.com',
                }
            },
        }),
    ],
    secret: process.env.CREDENTIALS_SECRET!,
    session: {
        strategy: 'jwt',
    },
    debug: process.env.NODE_ENV === 'development',
}

export const getAuthSession = () => getServerSession(authOptions)
