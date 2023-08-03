import bcrypt from 'bcrypt'
import prismaDb from '@/lib/db'
import { NextResponse, NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
    const body = await request.json()
    const { fullName, email, password } = body
    const isComplete = !!fullName && !!email && !!password
    if (!isComplete) {
        return new NextResponse('Missing name, email or password', {
            status: 400,
        })
    }
    const alreadyExists = await prismaDb.user.findUnique({
        where: { email },
    })
    if (!!alreadyExists) throw new Error('User with that email already exists')
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = await prismaDb.user.create({
        data: {
            name: fullName,
            email,
            hashedPassword,
        },
    })
    return new NextResponse(JSON.stringify(newUser), {
        status: 200,
    })
}
