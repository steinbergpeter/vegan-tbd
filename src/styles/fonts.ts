import { Inter, Roboto_Mono, Domine, Caveat } from 'next/font/google'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

const roboto_mono = Roboto_Mono({
    subsets: ['latin'],
    variable: '--font-roboto-mono',
    display: 'swap',
})

const caveat = Caveat({
    subsets: ['latin'],
    variable: '--font-caveat',
    display: 'swap',
})

const domine = Domine({
    subsets: ['latin'],
    variable: '--font-domine',
    display: 'swap',
})

export default `
    ${inter.variable}
    ${roboto_mono.variable}
    ${domine.variable}
    ${caveat.variable}
`
