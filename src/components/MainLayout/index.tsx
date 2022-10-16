import Head from 'next/head'
import Link from 'next/link'
import { PropsWithChildren } from 'react'

const MainLayout = ({ children }: PropsWithChildren) => {
    return (
        <div className="bg-white dark:bg-zinc-800  min-h-screen pb-16">
            <Link href="/cms/login">
                <button className="absolute right-4 top-4 border-2 border-slate-900 dark:border-slate-100 px-4 py-2 rounded text-black dark:text-white">
                    To CMS
                </button>
            </Link>

            <main className="mx-auto max-w-5xl px-4">
                <Link href="/">
                    <h1 className="text-center cursor-pointer py-10 lg:text-5xl text-2xl font-bold mt-0 text-slate-900 dark:text-gray-200">
                        Sturdy Octo Blog
                    </h1>
                </Link>

                {children}
            </main>
        </div>
    )
}

export default MainLayout
