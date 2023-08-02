import { z } from 'zod'

export const registrationSchema = z
    .object({
        fullName: z
            .string()
            .min(1, 'Full name is required')
            .min(3, 'Full name must have more than 3 characters')
            .max(100),
        email: z.string().email('Invalid email').min(1, 'Email is required'),
        password: z
            .string()
            .min(1, 'Password is required')
            .min(8, 'Password must have more than 8 characters')
            .max(20, 'Password must have less than 20 characters'),

        confirmPassword: z.string().min(1, 'Confirm password is required'),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'Passwords do not match',
        path: ['confirmPassword'],
    })

export type RegistrationValidator = z.infer<typeof registrationSchema>

export const loginSchema = z.object({
    email: z.string().email('Invalid email').min(1, 'Email is required'),
    password: z
        .string()
        .min(1, 'Password is required')
        .min(8, 'Password must have more than 8 characters')
        .max(20, 'Password must have less than 20 characters'),
})

export type LoginValidator = z.infer<typeof loginSchema>
