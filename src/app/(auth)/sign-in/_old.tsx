/*

'use client'

import {
    type RegistrationValidator,
    registrationSchema,
} from '@/lib/validation'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

export default function RegisterPage() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isValid },
        control,
    } = useForm<RegistrationValidator>({
        resolver: zodResolver(registrationSchema),
        mode: 'onBlur',
        progressive: true,
    })

    const onSubmit: SubmitHandler<RegistrationValidator> = async (data) => {
        console.log('data: ', data)
    }

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
                        Register to Create a New Account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form
                        className="space-y-6"
                        action="#"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div>
                            <label
                                htmlFor="firstName"
                                className="block text-sm font-medium leading-6"
                            >
                                First Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="firstName"
                                    type="text"
                                    {...register('firstName')}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.firstName && (
                                    <span className="text-red-800 block mt-2">
                                        {errors.firstName?.message}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="lastName"
                                className="block text-sm font-medium leading-6"
                            >
                                Last Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="lastName"
                                    type="text"
                                    {...register('lastName')}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.lastName && (
                                    <span className="text-red-800 block mt-2">
                                        {errors.lastName?.message}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6"
                            >
                                Email
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    type="email"
                                    {...register('email')}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.email && (
                                    <span className="text-red-800 block mt-2">
                                        {errors.email?.message}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium leading-6"
                                >
                                    Password
                                </label>
                                <div className="text-sm"></div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    type="password"
                                    {...register('password')}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.password && (
                                    <span className="text-red-800 block mt-2">
                                        {errors.password?.message}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="confirmPassword"
                                    className="block text-sm font-medium leading-6"
                                >
                                    Confirm Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="confirmPassword"
                                    type="password"
                                    {...register('confirmPassword')}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                {errors.confirmPassword && (
                                    <span className="text-red-800 block mt-2">
                                        {errors.confirmPassword?.message}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div>
                            <div className="text-sm text-center mb-4">
                                <a
                                    href="#"
                                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                                >
                                    Forgot password?
                                </a>
                            </div>
                            <button
                                // disabled={isDisabled}
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-indigo-200"
                            >
                                Register
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?{' '}
                        <a
                            href="#"
                            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                        >
                            Start a 14 day free trial
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}

*/
