import React from 'react'
import FormCard from '@/components/FormCard'
import RegisterForm from '@/components/RegisterForm'

const RegisterPage = () => {
    return (
        <div className="mx-auto w-full h-screen items-center justify-center flex flex-col bg-slate-50">
            <div className="mt-16">
                <FormCard title="Register" description="Create a new account">
                    <RegisterForm />
                </FormCard>
            </div>
        </div>
    )
}

export default RegisterPage
