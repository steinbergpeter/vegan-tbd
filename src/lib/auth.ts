import prismaDb from '@/lib/db'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { getServerSession, type NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcrypt'

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prismaDb),
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
                },
                email: {
                    label: 'Email',
                    type: 'text',
                },
                password: {
                    label: 'Password',
                    type: 'password',
                },
            },
            authorize: async (credentials) => {
                const areCredentialsValid =
                    !!credentials &&
                    !!credentials.email &&
                    !!credentials.password
                if (!areCredentialsValid)
                    throw new Error('Missing or incomplete credentials')
                const user = await prismaDb.user.findUnique({
                    where: { email: credentials.email },
                })
                if (!user || !user?.hashedPassword) {
                    throw new Error('No user found')
                }
                const passwordMatch = await bcrypt.compare(
                    credentials.password,
                    user.hashedPassword
                )
                if (!passwordMatch) throw new Error('Invalid password')
                return user
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
