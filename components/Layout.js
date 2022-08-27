import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Mixed Combative Systems | Filipino Escrima, Kickboxing, Submission Grappling and Self-Defense</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <title>Next.js Starter!</title>
            <link rel="icon" href="/favicon.ico" />
            <div class="relative px-4 py-3 text-white bg-indigo-600 pr-14">
  <p class="text-sm font-medium text-left sm:text-center">
  Visit us on the Official Youtube Channel of Mixed Combative Systems 


    <a class="underline" href="https://www.youtube.com/user/MixedCombativeSystem">   &rarr; </a>
  </p>

  <button
    aria-label="Close"
    class="absolute p-1 transition -translate-y-1/2 rounded-lg top-1/2 right-4 bg-black/10 hover:bg-black/20"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="w-5 h-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  </button>
</div>
            <Navbar />


            <main>{children}</main>
            <Footer />
        </>
    )
}