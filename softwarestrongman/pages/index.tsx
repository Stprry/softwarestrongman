import type { NextPage } from 'next'
import Head from 'next/head'
import { FaGithubAlt } from 'react-icons/fa'
import { TiSocialInstagramCircular } from 'react-icons/ti'
import NavSection from '../sections/nav'

const Home: NextPage = () => {
  const footerIconSize: number = 50

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>The Software Strongman</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavSection />

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <blockquote className="text-center text-2xl font-semibold italic text-slate-900">
          <span className="relative mr-2 inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-purple-500">
            <span className="relative text-white">Hey</span>
          </span>
          I&apos;m working on it!
        </blockquote>

        <div className="pt-5">
          <span className="mr-1 font-mono font-semibold">
            Hey, i&apos;m Sam
          </span>{' '}
          <span className="relative mr-2 inline-block before:absolute before:-inset-1 before:block before:-skew-x-6 before:bg-red-400">
            <span className="relative font-semibold italic text-white">
              The Software Strongman.{' '}
            </span>
          </span>
          <span className="font-mono font-semibold">
            I&apos;m a full stack developer by day and amateur strongman by
            night.
          </span>
        </div>
        <div className="pt-10 font-semibold">
          This site is currently under construction but will be live soon!
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <div className="flex items-center justify-center gap-2">
          <a
            href="https://www.instagram.com/softwarestrongman/"
            className="text-red-400 duration-150 ease-in-out hover:animate-pulse hover:text-pink-700"
          >
            <TiSocialInstagramCircular size={footerIconSize} />
          </a>

          <a
            href="https://github.com/Stprry"
            className=" text-red-400 duration-150 ease-in-out hover:animate-pulse hover:text-orange-700"
          >
            <FaGithubAlt size={footerIconSize} />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Home
