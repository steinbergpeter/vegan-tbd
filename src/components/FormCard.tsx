import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { type ReactNode } from 'react'

interface FormCardProps {
    title?: string
    description?: string
    footer?: string
    children?: ReactNode
}

function FormCard({ children, title, description, footer }: FormCardProps) {
    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>{children}</CardContent>
            <CardFooter className="flex justify-between">{footer}</CardFooter>
        </Card>
    )
}

export default FormCard
