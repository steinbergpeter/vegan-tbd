import React from 'react'
import FormCard from '@/components/FormCard'
import SignInForm from '@/components/SignInForm'
import Icon from '@/components/Icon'

const SignInPage = () => {
    return (
        <div className="mx-auto w-full h-screen items-center justify-center flex flex-col bg-slate-50">
            <div className="mt-16 w-2/3">
                <div className="flex gap-3">
                    <Icon.ArrowLeft />
                    <h1 className="mb-8">Home</h1>
                </div>
                <div className="mt-16 w-2/3 mx-auto">
                    <FormCard
                        title="Sign In"
                        description="Sign in and get started"
                    >
                        <SignInForm />
                    </FormCard>
                </div>
            </div>
        </div>
    )
}

export default SignInPage
