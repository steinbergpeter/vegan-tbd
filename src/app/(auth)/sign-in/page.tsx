import React from 'react'
import FormCard from '@/components/FormCard'
import SignInForm from '@/components/SignInForm'

const SignInPage = () => {
    return (
        <div className="mx-auto w-full h-screen items-center justify-center flex flex-col bg-slate-50">
            <div className="mt-16">
                <FormCard title="Sign In" description="Sign in and get started">
                    <SignInForm />
                </FormCard>
            </div>
        </div>
    )
}

export default SignInPage
