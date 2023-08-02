'use client'

import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
    registrationSchema,
    type RegistrationValidator,
} from '@/lib/validation'
import { useForm, type SubmitHandler } from 'react-hook-form'
import Link from 'next/link'

const RegisterForm = () => {
    const form = useForm<RegistrationValidator>({
        resolver: zodResolver(registrationSchema),
        mode: 'onChange',
        progressive: true,
    })

    const {
        handleSubmit,
        formState: { isSubmitting, isValid },
        control,
    } = form

    const onSubmit: SubmitHandler<RegistrationValidator> = async (data) => {
        console.log('register: ', data)
    }

    return (
        <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={control}
                    name="fullName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Public" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="jpublic@email.com"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input placeholder="••••••••" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Confirm Password</FormLabel>
                            <FormControl>
                                <Input placeholder="••••••••" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button
                    type="submit"
                    className="disabled:bg-slate-300 w-full bg-green-800 text-white hover:bg-green-700 focus:bg-green-700 focus:ring-green-300 focus:ring-offset-green-800 focus:ring-2 focus:ring-offset-2 focus:"
                    disabled={!isValid || isSubmitting}
                >
                    Submit
                </Button>
                <div>
                    <p>
                        Already have an account?{' '}
                        <Link
                            href="./sign-in"
                            className="text-blue-700 hover:text-blue-500"
                        >
                            Sign in here!
                        </Link>
                    </p>
                </div>
            </form>
        </Form>
    )
}

export default RegisterForm
