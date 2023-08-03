import React from 'react'
import FormCard from '@/components/FormCard'
import RegisterForm from '@/components/RegisterForm'
import Icon from '@/components/Icon'
import Link from 'next/link'

const RegisterPage = () => {
    return (
        <div className="mx-auto w-full h-screen items-center justify-center flex flex-col bg-slate-50">
            <div className="mt-16 w-2/3">
                <Link href="/">
                    <div className="flex gap-3">
                        <Icon.ArrowLeft />
                        <h1 className="mb-8">Home</h1>
                    </div>
                </Link>
                <div className="mx-auto w-2/3">
                    <FormCard
                        title="Register"
                        description="Create a new account"
                    >
                        <RegisterForm />
                    </FormCard>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage
