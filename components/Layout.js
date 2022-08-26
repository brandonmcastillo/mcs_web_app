import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Next.js Starter!</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <title>Next.js Starter!</title>
            <link rel="icon" href="/favicon.ico" />
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}