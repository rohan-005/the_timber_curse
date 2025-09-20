import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-bg px-4">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="font-horror text-4xl md:text-6xl text-blood-red mb-6">
          THANK YOU!
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Your download has started. Prepare to enter the haunted forest...
        </p>
        <p className="text-lg mb-10 text-gray-300">
          If the download doesn&apos;t start automatically,{' '}
          <a href="/game.zip" className="text-blood-red underline hover:no-underline">
            click here
          </a>
        </p>
        <Link
          href="/"
          className="inline-flex items-center text-blood-red hover:text-red-800 transition-colors duration-300"
        >
          <ArrowLeft size={20} className="mr-2" />
          Return to homepage
        </Link>
      </div>
    </div>
  )
}